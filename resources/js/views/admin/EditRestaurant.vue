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
        
        <v-btn color="green" dark @click="editRestaurant()">Save</v-btn>
        <br><br>
        <div>{{result}}</div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from '../../AppConst';

export default {
    props: ['id'],
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

    created: function () {
        this.getRestaurantData();
    },

    methods: {
        getRestaurantData() {
            axios.get(AppConst.restaurant_data, {
                params: {
                    id: this.id
                }
            }).then(response => {
                this.name = response.data.restaurant.name;
                this.description = response.data.restaurant.description,
                this.offer = response.data.restaurant.offer,
                this.rating = response.data.restaurant.rating,
                this.image = response.data.restaurant.image,
                this.isOpen = response.data.restaurant.isOpen,
                this.close_note = response.data.restaurant.close_note,
                this.region = response.data.restaurant.region,
                this.latlong = response.data.restaurant.latlong,
                this.mobile_number = response.data.restaurant.mobile_number,
                this.other_data = response.data.restaurant.other_data
            }).catch(error => {
                try {
                    Android.showToast("Something went wrong", "Okay");
                } catch (error) {
                    window.alert("Something went wrong");
                }
            });
        },

        editRestaurant() {
            axios.post(AppConst.edit_restaurant, {
                id: this.id,
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