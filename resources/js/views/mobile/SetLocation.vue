<template>
    <v-layout justify-center align-center fill-height class="white">
        <v-progress-circular
        v-if="processing"
        indeterminate
        color="amber"
        ></v-progress-circular>
        <v-btn v-else color="success" class="white--text" @click="askForGpsLocation()" large>
            <v-icon left dark>my_location</v-icon>
            SET LOCATION
        </v-btn>
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
                        lat: value.lat,
                        long: value.long
                    }
                }).then(response => {
                    if(response.status == '200') {
                        this.processing = false;
                        this.$store.dispatch('emptyRestaurants');
                        this.$store.dispatch('setCurrentLocation', response.data);
                        this.$router.push("/app/confirm_gps_location");
                    }
                });
            });
        },

        requestGpsPermission: function() {
            Android.requestGpsPermission();
        }
    },

    computed: {
        androidResponse: function() {
            return this.$store.getters.android_response;
        }
    },

    created: function() {
        this.$store.dispatch("showBottomNav", false);
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
