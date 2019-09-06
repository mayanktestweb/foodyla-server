<template>
    <div class="login_main">
        
        <div class="title grey--text text--darken-3">
            Login By Mobile Number
        </div>

        <div class="input">
            <v-text-field
                label="Mobile Number"
                type="number"
                v-model="mobile_number"
            ></v-text-field>
        </div>

        <div class="input">
            <v-text-field
                label="Password"
                type="password"
                v-model="password"
            ></v-text-field>
        </div>

        <div class="input">
            <v-btn block class="primary" dark @click="login()">Login</v-btn>
        </div>

        <div class="font-weight-medium orange--text" v-if="message != ''">
            {{message}}
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import AppConst from '../../AppConst';
export default {
    data: function() {
        return {
            mobile_number: null,
            password: null,
            message: ""
        }
    },

    methods: {
        login: function() {
            axios.post(AppConst.delivery_login, {
                mobile_number: this.mobile_number,
                password: this.password
            }).then(response => {
                if(response.status == '200') {
                    if(response.data.status == 'success') {
                        this.message = "Login Successful";
                        localStorage.setItem('login_token', response.data.login_token);

                        this.$router.push('/delivery/dashboard');
                    } else {
                        this.message = "Login Failed !";
                    }
                } else {
                    this.message = "Sorry Something went wrong Try Again Later";
                }
            }).catch(error => {
                this.message = "Sorry Something went wrong Try Again Later"
            });
        }
    }
}
</script>

<style scoped>
div.login_main {
    background: white;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
</style>