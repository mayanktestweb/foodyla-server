<template>
    <div class="details">
        <div class="processing" v-if="processing">
            <v-progress-circular
            color="amber"
            indeterminate></v-progress-circular>
        </div>
        <div v-else class="data">
            <div class="customer">
                <div class="cust">
                    <div class="title grey--text">{{order.customer_name}}</div>
                    <div style="font-size:1.2em">Total Price 
                        <span class="font-weight-medium green--text text--darken-3">
                            {{total_price}}
                        </span>
                    </div>
                </div>
                <div>
                    <v-btn color="success" @click="callNumber()" fab dark>
                        <v-icon>phone</v-icon>
                    </v-btn>
                </div>
            </div>

            <div class="address">
                <div class="font-weight-medium grey--text">Delivery Address</div>
                <div class="font-weight-medium black--text">
                    {{order.address}}
                </div>
                <div>
                    <input type="text" :value="order.latlong" id="latlong"><br>
                    <v-btn color="green" dark @click="copyLocation()">Copy Location</v-btn>
                </div>
            </div>

            <div class="restaurant">
                <div class="title">{{order.restaurant}}</div>
                <div style="font-size: 1.2em;">Total Cost 
                    <span class="font-weight-medium orange--text">
                        {{total_cost}}
                    </span>
                </div>

                <div class="hr"></div>

                <div class="dishes" v-for="dish in this.order.dishes" :key="dish.name">
                    <div class="dish">
                        <div class="dish_detail">
                            <div class="font-weight-medium grey--text text--darken-3" style="font-size: 1em;">
                                {{dish.name}}
                            </div>
                            <div class="font-weight-medium grey--text text--darken-1" style="font-size: 0.8em;">
                                {{dish.label}}
                            </div>
                        </div>
                        <div>
                            {{dish.count}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="action">
                <div>Order Id : {{this.id}}</div>
                <div v-if="!delivery_confirmed && (this.order.status != 'cancel' || this.order.status != 'delivered')">
                    <v-text-field
                        label="Enter Delivery Code"
                        v-model="delivery_code"
                    ></v-text-field>
                    <v-btn color="warning" @click="confirmDeliveryCode()" dark>Send</v-btn>
                </div>
                <div>
                    <div v-if="confirming_code">
                        <div class="confirming">
                            <v-progress-circular
                            indeterminate color="warning" size="20">
                            </v-progress-circular>
                        </div>                      
                    </div>
                    <div v-else :class="[delivery_confirmed ? 'green--text':'red--text', 
                    'font-weight-medium']">
                        {{this.confirm_msg}}
                    </div>
                </div>
                <div v-if="!delivery_confirmed && workStarted()">
                    <v-btn color="green" dark block @click="setStartWorking()">Start Working</v-btn>
                </div>
            </div>

        </div>
    </div>    
</template>

<script>
import axios from 'axios';
import AppConst from '../../AppConst';

export default {
    props: ['id'],

    data: function() {
        return {
            order: null,
            processing: false,
            mobile_number: "",
            delivery_code: "",
            confirming_code: false,
            confirm_msg: "",
            delivery_confirmed: false
        }
    },

    methods: {
        confirmDeliveryCode: function() {
            this.confirming_code = true;
            axios.post(AppConst.confirm_delivery_code, 
            {
                    id: this.id,
                    delivery_code: this.delivery_code
                
            }).then(response => {
                if (response.status == '200') {
                    if (response.data.status == 'success') {
                        this.delivery_confirmed = true;
                        this.confirm_msg = "Delivery Successful";
                    } else {
                        this.delivery_confirmed = false;
                        this.confirm_msg = "Verification Failed!";
                    }
                }
            }).catch(error => {
                this.confirm_msg = "Something went wrong ! Try Again.";
                this.delivery_confirmed = false;
            }).finally(() => {this.confirming_code = false});
        },

        callNumber: function() {
            try {
                console.log(this.mobile_number);
                Android.callNumber(this.mobile_number);
            } catch (error) {
                
            }
        },

        copyLocation() {
            var copyText = document.getElementById("latlong");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

        },

        setStartWorking() {
            localStorage.setItem('working_order_id', this.id);
        },

        workStarted() {
            return localStorage.getItem('working_order_id') == this.id ? false : true;
        }
    },

    computed: {
        total_cost: function() {
            var cost = 0;
            this.order.dishes.forEach(dish => {
                cost += dish.cost*dish.count;
            });

            return cost;
        },

        total_price: function() {
            var price = 0;
            this.order.dishes.forEach(dish => {
                price += dish.price*dish.count;
            });

            price -= this.order.discount;

            return price + this.order.delivery_charge;
        }
    },

    created: function() {
        this.processing = true;
        axios.get(AppConst.order_details, {
            params: {
                id: this.id
            }
        }).then(response => {
            this.order = response.data;
            this.mobile_number = response.data.mobile_number;
            if (this.order.status == "delivered" || this.order.status == "cancel") {
                this.delivery_confirmed = true;
            }
        }).catch(error => {
            window.alert("something went wrong while loading order details");
        }).finally(() => {this.processing = false;});
    }
}
</script>

<style scoped>
div.details {
    width: 100%;
    height: 100%;
}

div.processing {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

div.data {
    width: 100%;
    display: flex;
    flex-flow: column;
}

div.customer {
    display: flex;
    flex-flow: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
}

div.cust {
    display: flex;
    flex-flow: column;
}

div.address {
    padding: 10px;
}

div.restaurant {
    padding: 10px;
}

div.dish {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
}

div.dish_detail {
    display: flex;
    flex-flow: column;
}

div.hr {
    margin: 15px 0px;
    height: 1px;
    background-color: lightgray;
}

div.action > div {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    flex-flow: row;
    justify-content: center;
    align-items: center;
}
</style>