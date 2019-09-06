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
            processing: false,
            android_state: "null",
            loc_found: false
        }
    },
    methods: {
        askForGpsLocation: function() {
            if(this.$store.getters.gps_permission) {
                this.getLocationByGps();
            } else {
                this.android_state = "getting_permit";
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
            
            try {
                this.processing = false;
                this.android_state = "getting_loc";
                this.loc_found = false;
                this.$store.dispatch('setAndroidResponse', 'waiting');
                Android.startLocationSystem(value.lat, value.long);
            } catch (error) {
                Android.log("something went wrong");
            }
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
                
                if (this.android_state == "getting_permit") {
                
                    if(this.$store.getters.gps_permission) {
                        this.getLocationByGps();
                    } else {
                        this.$router.push('/app/set_location/manual');
                    }
                
                } else if (this.android_state == "getting_loc") {
                    localStorage.setItem("current_location", this.$store.state.current_location);
                    localStorage.setItem("location_description", this.description);
                    localStorage.setItem("latlong", JSON.stringify(this.$store.state.lat_long));
                    
                    if (this.loc_found) {
                        this.$router.push("/app/landing_page");
                    } else {
                        try {
                            Android.showToast("You didn't set location !");
                        } catch (error) {
                            
                        }
                    }
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