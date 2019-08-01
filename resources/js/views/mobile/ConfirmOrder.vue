<template>
    <div class="mainCO white">
        <div class="main_loading" v-if="loading">
            <div class="spinner">
                <v-progress-circular
                 indeterminate
                 color="orange darken-3"
                ></v-progress-circular>
            </div>
            <div class="loading_text orange--text text--darken-3 title">
                Wait a second. Your Order is in progress.
            </div>
        </div>
        <div class="main_loading" v-else>
            <div class="main_message" 
            v-bind:class="[order_successful ? 'green--text' : 'red--text', 'title']">
                {{order_message}}
            </div>
            <div class="order_details" v-if="order_successful">
                <div class="title orange--text text--darken-3">Order ID: {{order_id}}</div>
                <div class="title orange--text text--darken-3">Delivery Code : {{delivery_code}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from "../../AppConst";

export default {
    data: function() {
        return {
            loading: false,
            order_message: "",
            order_successful: false,
            order_id: '1221A5',
            delivery_code: '2341'
        }
    },

    created: function() {
        this.confirmOrder();
    },

    methods: {
        confirmOrder: function() {
            this.loading = true;
            axios.post(AppConst.confirm_order, {
                user_id: this.$store.state.user_id,
                mobile_number: this.$store.state.mobile_number,
                restaurant_id: this.$store.state.cart_restaurant,
                current_location: this.$store.state.current_location,
                location_description: this.$store.state.location_description,
                latlong: this.$store.state.lat_long.lat+","+this.$store.state.lat_long.long,
                order: this.getOrder(),
                delivery_code: this.generateDeliveryCode()
            }).then(response => {
                if (response.status == 200) {
                    
                    this.loading = false;
                    this.order_successful = true;
                    this.order_id = response.data.order_id;
                    this.delivery_code = response.data.delivery_code;
                    this.order_message = "Your Order is placed successfully. Thanks for using Foodola.";

                    if (localStorage.getItem('orders') == null) {
                        var orders = [];
                    } else {
                        var orders = JSON.parse(localStorage.getItem('orders'));
                    }

                    var order = {order_id: this.order_id, delivery_code: this.delivery_code
                        , status: null};
                    
                    orders.splice(0, 0, order);
                    
                    localStorage.setItem('orders', JSON.stringify(orders));
                } else {
                    this.order_successful = false;
                    this.order_message = "Sorry Something went wrong while placing your order";
                }
            }).catch(error => {
                console.log("error "+error);
            });
        },

        getOrder: function() {
            var orderedVarients = [];
            var orderIndex = [];

            this.$store.getters.cart.forEach(item => {
                if(orderedVarients[item.varient_id]) {
                    orderedVarients[item.varient_id].count += 1;
                } else {
                    orderedVarients[item.varient_id] = {dish_id: item.dish_id, 
                                        varient_id: item.varient_id, 
                                        price: item.varient_price, count: 1};

                    orderIndex.push(item.varient_id);
                }
            });

            var order = [];

            orderIndex.forEach(index => {
                order.push(orderedVarients[index]);
            });

            return order;
        },

        generateDeliveryCode: function() {
            var toReturn = [];
            
            for (let i = 0; i < 4; i++) {
               toReturn.push(Math.floor(Math.random()*10)); 
            }

            return toReturn.join("");
        }
    },

    watch: {
        order_successful: function(newVal, oldVal) {
            if (newVal) {
                var items = [];
                this.$store.getters.cart.forEach(item => {
                    items.push(item);
                });

                items.forEach(item=>{
                    this.$store.dispatch('removeDishVarient', item.varient_id);
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div.mainCO {
    height: 100%;
}

div.main_loading {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

div.spinner {
    padding: 20px;
    text-align: center;
}

div.loading_text {
    text-align: center;
}

div.main_message {
    text-align: center;
    padding: 20px;
    width: 100%;
    font-family: 'Lobster', cursive !important;
    font-size: 2em !important;
    text-shadow: 2px 2px 2px yellow;
}

div.order_details {
    margin-top: 20px;
}

div.order_details > div {
    padding: 5px;
}
</style>
