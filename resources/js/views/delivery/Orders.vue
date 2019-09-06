<template>
    <div class="orders grey">
        <div v-if="processing" class="processing">
            <v-progress-circular
            indeterminate
            color="amber"
            ></v-progress-circular>
        </div>
        <div v-else>
            <div class="order white" v-for="order in orders" :key="order.id">
                <div class="order_id">{{order.order_id}}</div>
                <div class="order_action" @click="$router.push('/delivery/order/details/'+order.order_id)">
                    <v-btn class="primary" dark>Show Details</v-btn>
                </div>
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
            orders: [],
            processing: false
        }
    },

    created: function () {
        this.processing = true;
        axios.get(AppConst.assigned_orders, {
            params: {
                login_token: localStorage.getItem('login_token')
            }
        }).then(response => {
            this.orders = response.data.orders;
        }).catch(error => {
            console.log(error);
        }).finally(() =>
            {this.processing = false;}
        );
    }
}
</script>

<style scoped>
div.orders {
    width: 100%;
    height: 100%;
}

div.processing {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

div.order {
    display: flex;
    width: 100%;
    flex-flow: row;
    padding: 20px 10px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
</style>