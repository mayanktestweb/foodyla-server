<template>
    <div class="cont">
        <v-container v-if="loading" fill-height>
            <v-layout justify-center align-center fill-height>
                <v-progress-circular
                indeterminate
                color="green"
                ></v-progress-circular>
            </v-layout>
        </v-container>

        <v-container v-else-if="!loading && this.$store.getters.cart.length == 0"
        fill-height>
            <v-layout justify-center align-center fill-height py-2>
                <div class="cart_empty">Cart is empty. Add delicious food to your cart.</div>
            </v-layout>
        </v-container>
        
        <div v-else class="main grey lighten-2">
            <div class="header white">
                <div class="restaurant_image">
                    <img src="http://192.168.43.116/img/butter_chicken.jpg" alt="">
                </div>
                <div class="restaurant_title">
                    <h2>Jodhpur Mishthan Bhandar</h2>
                </div>
            </div>

            <div class="items white">
                <div class="item" v-for="item in cartItems" :key="item.varient_id">
                    <div class="type">
                        <veg-icon v-if="item.type == 'veg'"></veg-icon>
                        <non-veg-icon v-else-if="item.type == 'non-veg'"></non-veg-icon>
                        <egg-icon v-else></egg-icon>
                    </div>
                    <div class="dish_detail">
                        <div class="dish_title body-2 grey--text text--darken-3">{{item.name}}</div>
                        <div class="dish_price caption grey--text text--darken-3">&#x20B9; {{item.price}}</div>
                        <div class="dish_label caption grey--text text--darken-1">{{item.label}}</div>
                    </div>
                    <div class="spacer">
                        <add-varient-button :varient="item"></add-varient-button>  
                    </div>
                    <div class="amount">&#x20B9; {{item.price * item.count}}</div>
                    <div class="divider"></div>
                </div>
                <div class="item">
                    <div class="font-weight-medium grey--text text--darken-3">Delivery Charge</div>
                    <div class="spacer"></div>
                    <div class="font-weight-medium grey--text text--darken-3">&#x20B9; {{delivery_charge}}</div>
                </div>
                <div class="total">
                    <div class="total_text font-weight-medium subheader grey--text text--darken-3">Total Amount</div>
                    <div class="spacer"></div>
                    <div class="total_amount font-weight-medium subheader grey--text text--darken-3">&#x20B9; {{total_amount}}</div>
                </div>
            </div>
        </div>
        
        <div v-if="!loading && this.$store.getters.cart.length > 0" class="action white--text font-weight-medium title" v-ripple @click="onProceed()">
            PROCEED TO CHECKOUT
        </div>
        <v-dialog v-model="ask_mobile_number">
            <v-layout justify-center align-center fill-height class="white">
                <v-btn color="warning" dark block large to="/app/add_mobile_number">Add Mobile Number</v-btn>
            </v-layout>
        </v-dialog>
    </div>
    
</template>

<script>
import axios from 'axios';
import VegIcon from "../../components/icons/VegIcon";
import NonVegIcon from "../../components/icons/NonVegIcon";
import EggIcon from "../../components/icons/EggIcon";
import AddVarientButton from "../../components/AddVarientButton";

const dishUpdateUrl = "http://192.168.43.116:8000/api/test";

export default {
    data: function() {
        return {
            loading: false,
            image: '',
            ask_mobile_number: false,
            delivery_charge: 10
        }
    },

    computed: {
        cartItems: function() {
            var dishByVarients = this.getAllDishByVarients();
            var cartIs = [];
            dishByVarients.forEach(varient => {

                var menu = this.$store.getters.restaurant_page.menu;

                var count = 0;
                var price = 0;
                var varient_id = varient;
                var dish_id = '';
                var name = '';
                var type = '';
                var label = '';
                
                this.$store.getters.cart.forEach(item => {
                    if(item.varient_id == varient) {
                        count++;
                        price = item.varient_price;
                        dish_id = item.dish_id;
                    }
                });

                menu.forEach(item => {
                    if(item.id == dish_id) {
                        name = item.name;
                        type = item.type;

                        if (item.varients.length > 1) {
                            item.varients.forEach(v => {
                                if(v.id == varient) label = v.label;
                            });
                        } else {
                            label = '';
                        }
                    }
                });

                var obj = {varient_id: varient_id, dish_id: dish_id, price: price, count: count,
                    name: name, type: type, label: label}
                
                cartIs.push(obj);
                cartIs.sort((a, b) => {
                    return a.varient_id > b.varient_id;
                });
            });

            return cartIs;
        },

        total_amount: function() {
            var total = 0;
            this.$store.getters.cart.forEach(item => {
                total += item.varient_price;
            });

            total += this.delivery_charge;
            return total;
        }
    },

    methods: {
        getAllDishByVarients: function() {
            var dishByVarients = [];
            this.$store.getters.cart.forEach(item => {
                if(!dishByVarients.includes(item.varient_id)) dishByVarients.push(item.varient_id);
            });

            return dishByVarients;
        },

        onProceed: function() {
            if(this.$store.state.mobile_number == null || this.$store.state.mobile_number == "") {
                this.ask_mobile_number = true;
            } else {
                this.$router.push("/app/payment");  
            }
        }
    },

    components: {
        'veg-icon': VegIcon,
        'non-veg-icon': NonVegIcon,
        'egg-icon': EggIcon,
        'add-varient-button': AddVarientButton
    },

    created: function() {
        this.$store.dispatch('showBottomNav', false);
    }
}
</script>

<style scoped>

    div.cont {
        height: 100%;
    }

    div.main {
        height: 100%;
        width: 100%;
    }

    div.header {
        display: flex;
        flex-flow: row;
        align-items: center;
    }

    div.restaurant_image {
        width: 25%;
        padding: 8px;
    }

    div.restaurant_image img {
        width: 100%;
        height: auto;
    }

    div.items {
        display: flex;
        margin-top: 30px;
        flex-flow: column;
    }

    div.item {
        display: flex;
        flex-flow: row;
        align-items: center;
        padding: 8px;
        flex-wrap: wrap;
    }

    div.dish_detail {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
        padding-left: 8px;
    }

    div.type {
        width: 5%;
        flex-shrink: 0;
    }

    div.amount {
        width: 15%;
        flex-shrink: 0;
        display: flex;
        justify-content: flex-end;
    }

    div.spacer {
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
    }
    div.divider {
        width: 100%;
        min-height: 1px;
        margin-top: 5px;
        background-color: lightgrey;
    }

    div.total {
        display: flex;
        flex-flow: row;
        align-items: center;
        padding: 8px;
    }

    div.action {
        position: fixed;
        min-height: 60px;
        width: 100%;
        background: linear-gradient(to right, #37cf37, darkgreen);
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }    

    div.cart_empty {
        font-family: 'Lobster', cursive;
        font-size: 2em;
        color: orangered;
        text-shadow: 2px 2px 2px orange;
        text-align: center;
    }
</style>
