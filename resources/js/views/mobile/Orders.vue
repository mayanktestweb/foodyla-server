<template>
    <div class="loading" v-if="loading">
        <v-progress-circular color="orange" indeterminate></v-progress-circular>
    </div>
    <div class="main_order" v-else>
        <div class="nav white" @click="goBack()">
            <v-icon left>arrow_back</v-icon>
            <span class="grey--text text--darken-3 title">Back</span>
        </div>
        <div class="orders white">
            <div class="order" v-for="order in orders" :key="order.order_id">
                <div class="order_details">
                    <div class="orange--text font-weight-medium">Order ID : {{order.order_id}}</div>
                    <div class="orange--text font-weight-medium">Delivery Code : {{order.delivery_code}}</div>
                </div>
                <div v-if="order.status == 'delivered'" class="green--text font-weight-medium">DELIVERED</div>
                <div v-else-if="order.status == 'cancel'" class="red--text font-weight-medium">CANCELED</div>
                <div v-else class="orange--text font-weight-medium">{{order.status.toUpperCase()}}</div>
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
            loading: false,
            orders: []
        }
    },

    created: function() {
        this.loadOrders();
    },

    computed: {
        
    },

    methods: {
        goBack: function() {
            this.$router.go(-1);
        },
        
        loadOrders: function() {
            
            this.loading = true;

            if(localStorage.getItem('orders') != null) {
                var orders = JSON.parse(localStorage.getItem('orders'));
            } else {
                var orders = [];
            }

            orders.forEach(order => {
                
                if(order.status != 'delivered' && order.status != 'cancel') {
                    this.loading = true;
                    console.log(order);
                    axios.get(AppConst.order_status, {
                        params: {
                            order_id: order.order_id
                        }
                    }).then(response => {
                        if (response.status == 200) {
                            this.loading = false;
                            order.status = response.data;

                            this.orders = orders;

                            localStorage.setItem('orders', JSON.stringify(this.orders));
                        }
                    });
                } else {
                    this.loading = false;
                    this.orders = orders;
                }
            });            
        }
    }
}
</script>

<style lang="scss" scoped>
div.loading {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

div.nav {
    padding-left: 8px;
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    position: fixed;
    top: 0px;
    width: 100%;
    flex-wrap: wrap;
    box-shadow: 2px 2px 3px grey;
}

div.orders {
    margin-top: 53px;
}

div.order {
    display: flex;
    flex-flow: row;
    height: 70px;
}

div.order > div {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    justify-content: space-around;
    align-items: flex;
    border-bottom: 1px solid lightgrey;
    text-align: center;
}

</style>