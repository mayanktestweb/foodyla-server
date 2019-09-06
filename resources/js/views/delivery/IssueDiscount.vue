<template>
    <div class="discount">
        Issue Discount
        <div class="user">
            <div>
                <v-text-field
                label="Customer Mobile Number" v-model="mobile_number" type="number">
                </v-text-field>
                <v-btn color="warning" dark @click="getInfo()">Get Info</v-btn>
            </div>
            <div>
                {{name}}
            </div>
        </div>

        <div class="coupons">
            <div>
                <v-select :items="coupons"
                 label="Select Discount Coupon" v-model="coupon_value"></v-select>
            </div>
            <div>
                <v-btn color="orange" dark block @click="sendDiscountRequest()">
                    Issue Discount Coupon
                </v-btn>
            </div>
        </div>
        <div class="result">
            <div v-if="fetching">
                <v-progress-circular
                indeterminate color="warning"></v-progress-circular>
            </div>
            <div v-else>
                {{result}}
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios';
import AppConst from '../../AppConst';

export default {
    data: function() {
        return {
            mobile_number: "",
            name: "",
            coupons: [
                {text: "₹ 1 Coupon", value: 1},
                {text: "₹ 2 Coupon", value: 2},
                {text: "₹ 3 Coupon", value: 3},
                {text: "₹ 4 Coupon", value: 4}
            ],

            coupon_value: null,
            result: "",
            fetching: false
        }
    },

    computed: {
        
    },

    methods: {
        getInfo: function() {
            this.fetching = true;
            axios.get(AppConst.user_info, {
                params: {
                    mobile_number: this.mobile_number
                }
            }).then(response => {
                if (response.status == '200' && response.data.status == 'success') {
                    this.name = response.data.name;
                } else this.name = "failed to get data";
            }).catch(error => {

            }).finally(() => {this.fetching = false;});
        },

        sendDiscountRequest: function() {
            this.fetching = true;
            axios.post(AppConst.discount_user, {
                mobile_number: this.mobile_number,
                coupon_value: this.coupon_value,
                login_token: localStorage.getItem('login_token')
            }).then(response => {
                if (response.status == '200' && response.data.status == 'success') {
                    this.result = "successful";
                } else {
                    this.result = "failed";
                }
            }).catch(error => {
                this.result = "failed by error";
            }).finally(() => {this.fetching = false;});
        }
    }
}
</script>

<style scoped>
div.discount {
    margin: 10px;
}

div.coupons {
    margin-top: 20px;
}

div.coupons > div {
    margin-bottom: 10px;
}

div.result > div{
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
}
</style>