<template>
    <div>
        <input type="text" v-model="label" placeholder="Label"><br><br>
        <input type="text" v-model="price" placeholder="Price"><br><br>
        <input type="text" v-model="cost" placeholder="cost"><br>
        <v-divider></v-divider>
        <div>
            <v-btn color="green" dark @click="save()">Save</v-btn>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import AppConst from '../../../AppConst';

export default {
    props: ['dish'],

    data() {
        return {
            label: "",
            price: "",
            cost: ""
        }
    },

    methods: {
        save() {
            Axios.post(AppConst.add_varient, {
                dish_id: this.dish.id,
                label: this.label,
                price: this.price,
                cost: this.cost
            }).then(res => {
                window.alert(res.data);
            }).catch(error => {
                window.alert("something went wrong");
            });
        }
    }
}
</script>