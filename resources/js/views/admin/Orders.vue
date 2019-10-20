<template>
    <div>
        <div class="reload">
            
        </div>
        <div class="main_body">
            <div class="orders" v-for="order in orders" :key="order.id">
                <div class="order">
                    <div class="grey--text text--darken-3 font-weight-medium">
                        Order ID : {{order.id}}
                    </div>
                    <div class="grey--text text--darken-3 font-weight-medium">
                        Mobile Number : {{order.mobile_number}}
                    </div>
                    <div v-if="order.status == 'delivered'" class="green--text text--darken-3 font-weight-medium">
                        Status: DELIVERED
                    </div>
                    <div v-else-if="order.status == 'cancel'" class="red--text text--darken-3 font-weight-medium">
                        Status: CANCELED
                    </div>
                    <div v-else class="orange--text text--darken-3 font-weight-medium">
                        Status: {{order.status.toUpperCase()}}
                    </div>
                    <div class="grey--text text--darken-3 font-weight-medium">
                        Current Location : {{order.current_location}}
                    </div>
                    <div class="grey--text text--darken-3 font-weight-medium">
                        Location Description : {{order.location_description}}
                    </div>
                    <div class="grey--text text--darken-3 font-weight-medium">
                        Latitude Longitude : {{order.latlong}}
                    </div>
                    <div class="assign_status red" v-if="isAssigned(order.id)"></div>
                    <div class="assign_status green" v-else></div>
                    <div class="action_W">
                        <v-btn color="teal" dark @click="assignOrder(order)">Assign Order</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="amber" dark @click="showOrderDetails(order)">Show Details</v-btn>
                        <v-btn color="red" dark @click="confirmOrderCancel(order)">Cancel Order</v-btn>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="show_assign_order">
            <v-dialog v-model="show_assign_order">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                        Assign Order
                    </v-card-title>
                        
                    <v-card-text>
                        <div v-if="loading">
                            <v-progress-circular
                            inderminate color="warning"></v-progress-circular>
                        </div>
                        <div v-else>
                            <v-select
                                label="Delivery Man"
                                :items="delivery_men"
                                item-text="name"
                                item-value="id" 
                                v-model="sales_man_id"
                            >

                            </v-select>
                        </div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" dark @click="assignNow()">Assign Now</v-btn>
                    </v-card-action>
                </v-card>
            </v-dialog>
        </div>
        <div v-if="show_details">
            <v-dialog v-model="show_details">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                        Order Details
                    </v-card-title>

                    <v-card-text>
                        <div class="grey--text text--darken-3 font-weight-medium">
                            Restaurant : {{order_detail.restaurant}}
                        </div>
                        <div class="grey--text text--darken-3 font-weight-medium">
                            Restaurant Mobile Number : {{order_detail.rest_mobile_number}}
                        </div>
                        <div class="subheading">Items</div>
                        <div class="dish" v-for="dish in order_detail.dishes" :key="dish.id">
                            <div class="grey--text text--darken-3 font-weight-regular">
                                {{dish.name}}
                            </div>
                            <div class="grey--text text--darken-3 font-weight-regular">
                                {{dish.label}}
                            </div>
                            <div class="grey--text text--darken-3 font-weight-regular">
                                {{dish.count}}
                            </div>
                            <div class="green--text text--darken-3 font-weight-regular">
                                {{dish.price}}
                            </div>
                            <div class="orange--text text--darken-3 font-weight-regular">
                                {{dish.cost}}
                            </div>
                            <hr>
                        </div>
                        <div class="teal--text font-weight-medium">
                            Delivery Charge : {{order_detail.delivery_charge}}
                        </div>
                        <div class="red--text font-weight-medium">
                            Discount : {{order_detail.discount}}
                        </div>
                        <div class="green--text title">
                            Total Cost : {{total_price}}
                        </div>

                        <div class="orange--text title">
                            Total Cost : {{total_cost}}
                        </div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" dark @click="show_details = false">Okay</v-btn>
                    </v-card-action>
                </v-card>
            </v-dialog>
        </div>

        <div v-if="show_cancel_order">
            <v-dialog v-model="show_cancel_order">
                <v-card>
                    <v-card-title
                        class="headline red white--text"
                        primary-title>
                        Cancel Order
                    </v-card-title>

                    <v-card-text>
                        <div class="title grey--text text--darken-3">
                            Are You sure to cancel this order
                        </div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn color="red" dark @click="cancelOrder()">Yes</v-btn>
                        <v-btn color="red" flat @click="show_cancel_order = false">No</v-btn>
                    </v-card-action>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import AppConst from '../../AppConst';
export default {
    data() {
        return {
            orders: [],
            show_assign_order: false,
            sales_man_id: null,
            order_to_work: null,
            show_details: false,
            loading: false,
            delivery_men: [],
            assigned_orders: [],
            order_detail: null,
            show_cancel_order: false,
            order_to_cancel: null
        }
    },

    created() {
        this.loadOrders();
        this.loadAssignedOrders();
    },

    computed: {
        total_price: function () {
            var p = 0;
            this.order_detail.dishes.forEach(item => {
                p += item.price*item.count;
            })
            p += this.order_detail.delivery_charge;
            p -= this.order_detail.discount;
            return p;
        },

        total_cost: function() {
            var p = 0;
            this.order_detail.dishes.forEach(item => {
                p += item.cost*item.count;
            })

            return p;
        }
    },

    methods: {
        loadOrders() {
            Axios.get(AppConst.load_orders, {
                params: {

                }
            }).then(response => {
                this.orders = response.data.orders.reverse();
            }).catch(error => {
                window.alert('something went wrong while loading orders');
            });
        },

        loadAssignedOrders() {
            Axios.get(AppConst.admin_assigned_orders).then(response => {
                this.assigned_orders = response.data.assigned_orders
            }).catch(error => {
                window.alert("something went wrong while loading assigned orders");
            });
        },

        assignOrder(order) {
            this.order_to_work = order;
            this.show_assign_order = true;
            this.loading = true;

            Axios.get(AppConst.delivery_men).then(response => {
                this.delivery_men = response.data.delivery_men;
            }).catch(error => {
                window.alert("something went wrong");
            }).finally(() => {
                this.loading = false;
            })
        },

        assignNow() {
            Axios.post(AppConst.assign_order_admin, {
                order_id: this.order_to_work.id,
                delivery_man_id: this.sales_man_id
            }).then(response => {
                window.alert(response.data);
            }).catch(e => {
                window.alert("something went wrong");
            });
        },

        isAssigned(id) {
            var assigned = false;
            this.assigned_orders.forEach(item => {
                if(item.order_id == id) assigned = true;
            });
            return assigned;
        },

        showOrderDetails(order) {
            this.show_details = true;
            Axios.get(AppConst.order_details, {
                params: {
                    id: order.id
                }
            }).then(response => {
                this.order_detail = response.data;
            }).catch(error => {
                window.alert("something went wrong");
            })
        },

        confirmOrderCancel(order) {
            this.show_cancel_order = true;
            this.order_to_cancel = order;
        },

        cancelOrder() {
            this.show_cancel_order = false;
            Axios.post(AppConst.cancel_order, {
                id: this.order_to_cancel.id
            }).then(response => {
                window.alert(response.data+" in operation");
            }).catch(error => {
                window.alert("something went wrong");
            })
        }
    }
}
</script>

<style scoped>
div.order {
    margin: 10px;
    padding: 20px;
    border: 2px solid grey;
    border-radius: 5px;
}

div.order > div {
    padding: 5px 0px;
}
div.action_W {
    display: flex;
    flex-flow: row;
    align-items: center;
}

div.assign_status {
    min-height: 50px;
    width: 50px;
}
</style>