<template>
    <div>
        <input type="text" v-model="label"><br><br>
        <input type="text" v-model="price"><br><br>
        <input type="text" v-model="cost"><br>
        <v-divider></v-divider>
        <div class="action_w">
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="save()">Save</v-btn>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import AppConst from '../../../AppConst';
export default {
    props: ['varient'],
    
    data() {
        return {
            label: "",
            price: "",
            cost: ""
        }
    },

    created() {
        this.label = this.varient.label;
        this.price = this.varient.price;
        this.cost = this.varient.restaurant_rate.rate;
    },

    methods: {
        save() {
            Axios.post(AppConst.edit_varient, {
                id: this.varient.id,
                label: this.label,
                price: this.price,
                cost: this.cost
            }).then(response => {
                window.alert(response.data);
            }).catch(e => {
                window.alert("something went wrong");
            });
        }
    }
}
</script>

<style scoped>
input[type="text"] {
    border: 1px solid grey;
}

div.action_w {
    display: flex;
    flex-flow: row;
}
</style>