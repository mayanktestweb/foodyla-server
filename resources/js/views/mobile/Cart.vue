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

        <v-container v-else-if="!loading && cartItemsCount == 0"
        fill-height>
            <v-layout justify-center align-center fill-height py-2>
                <div class="cart_empty">Cart is empty. Add delicious food to your cart.</div>
            </v-layout>
        </v-container>
        
        <div v-else class="main grey lighten-2">
            <div class="header white">
                <div>
                    <v-icon @click="$router.go(-1)">arrow_back</v-icon>
                </div>
                <div class="restaurant_image">
                    <img :src="this.$store.getters.restaurantById(this.$store.state.cart_restaurant).image" alt="">
                </div>
                <div class="restaurant_title">
                    <h2>
                        {{this.$store.getters.restaurantById(this.$store.state.cart_restaurant).name}}
                    </h2>
                </div>
            </div>

            <div class="offer white" 
                v-if="this.$store.getters.restaurantById(this.$store.state.cart_restaurant).offer != null">
                <span class="amber--text text--darken-3 font-weight-medium">10% off on orders above &#x20B9;100 upto &#x20B9;100</span>
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
                
                <div v-if="offer_discount > 0" class="item">
                    <div class="font-weight-medium success--text">Offer Discount</div>
                    <div class="spacer"></div>
                    <div class="font-weight-medium success--text">&#x20B9; {{offer_discount}}</div>
                </div>
                <div class="discount" v-if="$store.state.discount_coupons.length > 0">
                    <div v-if="$store.state.applied_discount_coupon == null">
                        <v-btn flat small color="success" @click="applyDiscountCoupon()">APPLY DISCOUNT COUPON</v-btn>
                    </div>
                    <div v-else class="item">
                        <div class="font-weight-medium green--text">Coupon Discount</div>
                        <div class="spacer">
                            <v-btn flat color="success" small @click="removeCoupon()">REMOVE</v-btn>
                        </div>
                        <div class="font-weight-medium green--text">
                            &#x20B9; {{this.$store.state.applied_discount_coupon.coupon_value}} 
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="font-weight-medium grey--text text--darken-3">Order Total</div>
                    <div class="spacer"></div>
                    <div class="font-weight-medium grey--text text--darken-3">&#x20B9; {{dish_amount}}</div>
                </div>

                <div class="item">
                    <div>
                        <div class="font-weight-medium grey--text text--darken-3">Delivery Charge</div>
                        <div class="caption grey--text text--darken-1">
                            Free Delivery on Order Total above &#x20B9;100
                        </div>
                    </div>
                    <div class="spacer"></div>
                    <div v-if="delivery_charge > 0" class="font-weight-medium grey--text text--darken-3">&#x20B9; {{delivery_charge}}</div>
                    <div v-else class="font-weight-medium success--text">FREE</div>
                </div>

                <div class="total">
                    <div class="total_text title subheader grey--text text--darken-3">Total Amount</div>
                    <div class="spacer"></div>
                    <div class="total_amount title subheader grey--text text--darken-3">&#x20B9; {{total_amount}}</div>
                </div>
            </div>

            <div class="cart_footer">
            
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
import AppConst from '../../AppConst';

const dishUpdateUrl = "http://192.168.43.116:8000/api/test";

export default {
    data: function() {
        return {
            loading: false,
            image: '',
            ask_mobile_number: false
        }
    },

    computed: {
        cartItemsCount: function() {
            return this.$store.getters.cart.length;
        },
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
            var total = this.dish_amount;

            total += this.delivery_charge;
            
            return total;
        },

        offer_discount: function() {
            var offer = this.$store.getters.restaurantById(this.$store.state.cart_restaurant).offer;

            if (offer != null && this.pure_dish_total > 100) {
                var total = this.pure_dish_total;
                // lets just hardcode 10 % of offer discount on Orders above Rs 100
                var od = total/10;
                od = Math.trunc(od);

                if (od > 100) {
                    od = 100;
                }

                return od;
            } else {
                return 0;
            }
        },

        dish_amount: function() {
            var total = this.pure_dish_total - this.offer_discount;
            if (this.$store.state.applied_discount_coupon != null) {
                total -= this.$store.state.applied_discount_coupon.coupon_value;
            }
            return total;
        },

        pure_dish_total: function() {
            var total = 0;
            this.$store.getters.cart.forEach(item => {
                total += item.varient_price;
            });
            return total;
        },

        delivery_charge: function() {
            if (this.dish_amount > 100) {
                return 0;
            } else {
                return 10;
            }
        },

        cashback_string: function() {
            // 50% cashback upto Rs 100
            var cashback_amount = this.dish_amount/2;
            cashback_amount = Math.trunc(cashback_amount);

            if (cashback_amount > 100) {
                cashback_amount = 100;
            }

            var cb_string = [];
            while (cashback_amount > 0) {
                if (cashback_amount >= 80) {
                    cb_string[cb_string.length] = 20;
                    cashback_amount -= 20;
                } else if (cashback_amount > 50 && cashback_amount < 80) {
                    cb_string[cb_string.length] = 15;
                    cashback_amount -= 15;
                } else if (cashback_amount <= 50 && cashback_amount >= 10) {
                    cb_string[cb_string.length] = 10;
                    cashback_amount -= 10;
                } else if (cashback_amount < 10) {
                    cb_string[cb_string.length] = cashback_amount;
                    cashback_amount = 0;
                }
            }

            return cb_string;
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
                this.$store.dispatch('setOtherDiscount', this.offer_discount);
                this.$store.dispatch('setDeliveryCharge', this.delivery_charge);
                this.$store.dispatch('setCashbackString', this.cashback_string);
                this.$router.push("/app/payment");  
            }
        },

        removeCoupon: function() {
            this.$store.dispatch('setAppliedDiscountCoupon', null);
        },

        applyDiscountCoupon: function () {
            this.$store.dispatch('setOtherDiscount', this.offer_discount);
            this.$router.push('/app/discount_coupons');
        }
    },

    components: {
        'veg-icon': VegIcon,
        'non-veg-icon': NonVegIcon,
        'egg-icon': EggIcon,
        'add-varient-button': AddVarientButton
    },

    created: function() {
        this.$store.dispatch('setActiveOption', 'cart');
        if (this.cartItemsCount > 0) {
            this.$store.dispatch('showBottomNav', false);
        }
        axios.get(AppConst.discount_coupons_url, {
            params: {
                user_id: this.$store.state.user_id
            }
        }).then((response) => {
            if (response.status == 200) {
                console.log("i must be called");
                this.$store.dispatch('setDiscountCoupons', response.data);
            }
        });
    },

    watch: {
        dish_amount: function(newVal, oldVal) {
            if (this.$store.state.applied_discount_coupon != null) {
                var coupon_obj = this.$store.state.applied_discount_coupon;

                newVal += coupon_obj.coupon_value;

                if (coupon_obj.coupon_value >= 5 && coupon_obj.coupon_value < 15 && newVal < 50) {
                    this.removeCoupon();
                } else if (coupon_obj.coupon_value == 15 && newVal < 150) {
                    this.removeCoupon();
                } else if (coupon_obj.coupon_value == 20 && newVal < 200) {
                    this.removeCoupon();
                }
            }
        }
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

    div.header > div{
        text-align: center;
    }

    div.offer {
        margin-top: 10px;
        text-align: center;
        height: 40px;
        line-height: 40px;
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

    div.cart_footer {
        min-height: 100px;
    }
</style>
