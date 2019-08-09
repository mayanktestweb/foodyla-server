<template>
    <div class="main white">
        <div class="title">
            <div class="back" v-on:click="goBack()">
                <v-icon>arrow_back</v-icon>
            </div>
            <div class="text">
                Add Mobile Number
            </div>
        </div>
        <div class="mobile_number">
            <div id="nineone" class="font-weight-medium grey--text text--darken-2 title">+91 - </div>
            <div id="mn">
                <v-text-field type="number" v-model="mobile_number" 
                label="Enter Mobile Number" :disabled="get_otp">

                </v-text-field>
            </div>
        </div>
        <div class="otp" v-if="get_otp">
            <v-text-field v-model="otp" label="Enter OTP" 
            :append-icon="showOtp ? 'visibility' : 'visibility_off'" @click:append="showOtp = !showOtp" 
            :type="showOtp ? 'number' : 'password'" :disabled="lock_otp">

            </v-text-field>
        </div>

        <v-progress-circular v-if="progress"
            indeterminate
            color="green"
        ></v-progress-circular>
        <div class="action" v-else>
            <div v-if="disable_button" class="orange--text text--darken-4 font-weight-regular subhead">{{disable_reason}}</div>
            <v-btn v-else color="warning" dark large  value="true" @click="onAction()">{{btn_text}}</v-btn>
        </div>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
import axios from 'axios';
import AppConst from "../../AppConst";


export default {
    data: function() {
        return {
            mobile_number: "",
            otp: "",
            button_state: 'get mobile number',
            showOtp: true,
            get_otp: false,
            lock_otp: false,
            timer: 30,
            progress: false,
            app_hash: 'nohash'
        }
    },

    created: function(){
        this.$store.dispatch('showBottomNav', false);
        
        try {
            this.app_hash = Android.getAppHash();
        } catch (error) {
            
        }
    },

    computed: {
        btn_text: function() {
            if (this.button_state == 'get mobile number') {
                return "Confirm Mobile Number";
            } else if(this.button_state == 'get otp') {
                return "Resend OTP";
            }
        },

        disable_button: function() {
            if(this.button_state == 'get mobile number') {
                if(this.mobile_number.match(/\b\d{10}\b/)) return false;
                else return true;
            } else if(this.button_state == 'get otp') {
                if(this.timer == 0) return false;
                else return true;
            }
        },

        disable_reason: function() {
            if(this.button_state == "get mobile number") return "Enter Valid Mobile Number";
            else if(this.button_state == "get otp") return "Resend OTP in "+this.timer;
        }
    },

    methods: {
        goBack: function() {
            history.back();
        },
        onAction: function() {
            if(this.button_state == 'get mobile number') {
                
                
                try {
                    Android.listenForOtp();
                } catch (error) {
                    
                }

                this.progress = true;
                axios.post(AppConst.confirm_mobile_number, {
                        user_id: this.$store.state.user_id,
                        mobile_number: this.mobile_number,
                        otp: this.generateOtp(),
                        app_hash: this.app_hash
                    }).then(response => {
                        this.progress = false;
                        if(response.status == 200) {
                            this.button_state = 'get otp';
                            this.get_otp = true;
                            this.timer = 30;
                            this.startTimer();
                        }
                    }).catch(error => {
                        console.log(error);
                        
                        try {
                            Android.showToast("Sorry Something went wrong");
                        } catch (e) {
                            
                        }

                        history.back();
                    });
                
                
            } else if(this.button_state == 'get otp') {
                axios.post(AppConst.confirm_mobile_number, {
                    user_id: this.$store.state.user_id,
                    mobile_number: this.mobile_number,
                    otp: this.generateOtp()
                }).then(response => {
                    this.timer = 30;
                    this.startTimer();
                });
            }
        },

        generateOtp: function() {
            var nums = [0,1,2,3,4,5,6,7,8,9];

            var toReturn = [];
            
            for (let i = 0; i < 4; i++) {
               toReturn.push(nums[Math.floor(Math.random()*10)]); 
            }

            return toReturn.join("");
        },

        sendOtp: function() {
            axios.post(AppConst.confirm_otp, {
                user_id: this.$store.state.user_id,
                mobile_number: this.mobile_number,
                otp: this.otp
            }).then(response => {
                this.progress = false;
                if(response.data.status == 'success') {
                
                    // send mobile number to server to save it with user
                    this.$store.dispatch('setMobileNumber', this.mobile_number);
                    
                    try {
                        Android.showToast("Congratulations verification successful");
                    } catch (error) {
                        
                    }
                
                } else {
                    try {
                        Android.showToast("Sorry Verification failed");
                    } catch (error) {
                        
                    }
                }
                history.back();
            }).catch(error => {
                try {
                    Android.showToast(error);
                } catch (e) {
                    
                }
                this.goBack();
            });
        },

        startTimer: function() {
            var tm = setInterval(() => {
                this.timer -= 1;
                if(this.timer == 0) clearInterval(tm);
            }, 1000);
        }
    },

    watch: {

        otp: function(newVal, oldVal) {
            if(newVal.match(/\b\d{4}\b/)) {
                this.lock_otp = true;
                this.progress = true;
                
                this.sendOtp();
            }
        }
    }
}
</script>


<style scoped>
div.main {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
}

div.main > div {
    padding: 5px;
}

div.title {
    display: flex;
    flex-flow: row;
    width: 100%;
}

div.back {
    width: 10%;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
}

div.text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    line-height: 50px;
}

div.mobile_number {
    display: flex;
    flex-flow: row;
    width: 100%;
}

div#nineone {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}

div#mn {
    padding: 5px;
    flex-grow: 1;
}

div.otp {
    padding: 5px;
    width: 40%;
}

div.action {
    padding: 5px;
}
</style>
