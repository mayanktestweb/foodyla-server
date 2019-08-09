<template>
    <v-layout fill-height justify-center align-center 
        class="orange darken-1 white--text title font-weight-medium">
        {{msg}}
    </v-layout>
</template>

<script>
import axios from 'axios';
import AppConst from '../../AppConst';

export default {
    data: function() {
        return {
            msg: "Loading..."
        }
    },

    created: function() {
        this.$store.dispatch('showBottomNav', false);

        try {
            var userInfo = Android.requestUserData();
            
            var isGpsPermission = Android.isGpsPermission();
            
            userInfo = userInfo.split("|");
            this.$store.dispatch('setUserName', userInfo[0]);
            this.$store.dispatch('setUserEmail', userInfo[1]);
            this.$store.dispatch('setUserImage', userInfo[2]);

            this.$store.dispatch('setGpsPermission', isGpsPermission);

            if (localStorage.getItem('current_location') != null && 
                localStorage.getItem('location_description') != null) {
                this.$store.dispatch('setCurrentLocation', localStorage.getItem('current_location'));
                this.$store.dispatch('setLocationDescription', localStorage.getItem('location_description'));              
            }

            if (localStorage.getItem("latlong") != null) {
                this.$store.dispatch('setLatLong', JSON.parse(localStorage.getItem('latlong')));
            }

        } catch (error) {
            console.log(error);
        }

        this.getUserId();

        if(!this.$store.state.app_started) {
            this.$store.dispatch('setAppStarted', true);
            
            if(this.$store.state.current_location == null || this.$store.state.current_location == "") {
                this.$router.push("/app/set_location");
            } else {
                this.$router.push("/app/landing_page");
            }
        } else {
           Android.closeApp();
        }
    },

    methods: {
        getUserId: function() {
            
            axios.get(AppConst.user_id_url, {
                params: {
                    name: this.$store.state.user_name,
                    email: this.$store.state.user_email,
                    user_image: this.$store.state.user_image 
                }
                
            }).then((response) => {
                if(response.status == '200') {
                    this.$store.dispatch('setUserId', response.data.user_id);
                    this.$store.dispatch('setMobileNumber', response.data.mobile_number);
                } else {
                    try {
                        Android.showToast('Something went wrong. Try Again!');
                    } catch (error) {
                        
                    }
                }
            }).catch(error => console.log(error));
        }
    },

    computed: {
        android_response: function() {
            return this.$store.getters.android_response;
        }
    },

    watch: {
        android_response: function(newVal, oldVal) {
            if(oldVal == 'waitingu' && newVal == 'done') {
                this.msg = this.$store.state.user_name+" "+this.$store.state.user_email;
            }
        }
    }
}
</script>
