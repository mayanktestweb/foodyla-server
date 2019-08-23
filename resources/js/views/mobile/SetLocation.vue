<template>
    <v-layout justify-center align-center fill-height class="white">
        <v-progress-circular
        v-if="processing"
        indeterminate
        color="amber"
        ></v-progress-circular>
        <div v-else class="setloc">
            <v-btn color="success" class="white--text" @click="askForGpsLocation()" large>
                <v-icon left dark>my_location</v-icon>
                SET LOCATION
            </v-btn>
            <div class="img" style="display: flex;flex-flow: row;justify-content: center;">
                <img src="https://foodyla.b-cdn.net/system_icons/burgerDrink.svg">
            </div>
        </div>
    </v-layout>
</template>

<script>
import axios from 'axios';
import AppConst from '../../AppConst';

export default {
    data: function() {
        return {
            processing: false
        }
    },
    methods: {
        askForGpsLocation: function() {
            if(this.$store.getters.gps_permission) {
                this.getLocationByGps();
            } else {
                this.$store.dispatch('setAndroidResponse', 'waiting');
                this.requestGpsPermission();
            }
        },

        getLocationByGps: function() {
            this.processing = true;
            navigator.geolocation.getCurrentPosition(this.setPosition);
        },

        setPosition: function(position) {
            var value = {lat: position.coords.latitude, long: position.coords.longitude};
            
            this.$store.dispatch('setLatLong', value).then(()=>{
                // send coordinates for reverse geo encoding
                axios.get(AppConst.get_location, {
                    params: {
                        latlng: value.lat+","+value.long,
                        key: "AIzaSyCbZnPgGn9-uDMQW4uP89ctM7MXsD4kysE"
                    }
                }).then(response => {
                    if(response.status == '200') {
                        this.processing = false;
                        this.$store.dispatch('emptyRestaurants');
                        this.$store.dispatch('setCurrentLocation', 
                            response.data.results[0].formatted_address);
                        this.$router.push("/app/confirm_gps_location");
                    }
                }).catch(error => {
                    try {
                        Android.log(error);
                    } catch (error) {
                        
                    }
                });
            });
        },

        requestGpsPermission: function() {
            try {
                Android.requestGpsPermission();
            } catch (error) {
                
            }
        }
    },

    computed: {
        androidResponse: function() {
            return this.$store.getters.android_response;
        }
    },

    created: function() {
        this.$store.dispatch("showBottomNav", false);
        try {
            Android.requestLocationSetting();
        } catch (error) {
            
        }
    },

    watch: {
        androidResponse: function(newVal, oldVal) {
            if(oldVal === 'waiting' && newVal === 'done') {
                if(this.$store.getters.gps_permission) {
                    this.getLocationByGps();
                } else {
                    this.$router.push('/app/set_location/manual');
                }
            }
        }
    }
}
</script>

<style scoped>
div.img {
    display: flex;
    flex-flow: row;
    justify-content: center;
}

img {
    border-style: none;
    position: absolute;
    top: 100px;
    width: 40%;
}
</style>