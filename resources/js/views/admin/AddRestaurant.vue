<template>
    <div class="ad">
        <input type="text" v-model="name" placeholder="Name"><br>
        <input type="text" v-model="description" placeholder="Description"><br>
        <input type="text" v-model="offer" placeholder="Offer"><br>
        <input type="text" v-model="rating" placeholder="rating"><br>
        <input type="text" v-model="image" placeholder="Image"><br>
        <input type="checkbox" :checked="isOpen" v-model="isOpen"> Is Open<br>
        <input type="text" v-model="close_note" placeholder="Close Note"><br>
        <input type="text" v-model="region" placeholder="Region"><br>
        <input type="text" v-model="latlong" placeholder="Lat Long"><br>
        <input type="text" v-model="mobile_number" placeholder="Mobile Number"><br>
        <input type="text" v-model="other_data" placeholder="Other Data"><br>
        <br>
        
        <v-btn color="green" dark @click="addRestaurant()">Add</v-btn>
        <br><br>
        <div>{{result}}</div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from '../../AppConst';

export default {
    data: function () {
        return {
            name: "",
            description: "",
            offer: "",
            rating: "",
            image: "",
            isOpen: false,
            close_note: "",
            region: "",
            latlong: "",
            mobile_number: "",
            other_data: "",
            result: ""
        }
    },

    methods: {
        addRestaurant() {
            axios.post(AppConst.add_restaurant, {
                name: this.name,
                description: this.description,
                offer: this.offer,
                rating: this.rating,
                image: this.image,
                isOpen: this.isOpen,
                close_note: this.close_note,
                region: this.region,
                latlong: this.latlong,
                mobile_number: this.mobile_number,
                other_data: this.other_data                
            }).then(response => {
                this.result = response.data;
            }).catch(error => {
                try {
                    Android.showToast("Something went wrong", "Okay");
                } catch (error) {
                    window.alert("Something went wrong");
                }
            });
        }
    }
}
</script>

<style scoped>
input {
    margin: 5px;
}

input[type="text"] {
    border: 1px solid grey;
}

</style>