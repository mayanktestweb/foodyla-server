<template>
    <div class="rest">
        <div v-if="loading">
            <v-progress-circular
            inderminate color="orange"></v-progress-circular>
        </div>
        <div v-else>
            <div class="restaurants" v-for="restaurant in restaurants" :key="restaurant.id">
                <div class="restaurant">
                    <div class="grey--text text--darken-3 title rest">
                        {{restaurant.name}}
                    </div>
                    <div class="action">
                        <v-btn color="primary" flat :to="'/admin/restaurant/'+restaurant.id+'/edit'">
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </div>
                    <div class="action">
                        <v-btn color="green" flat :to="'/admin/restaurant/'+restaurant.id+'/dishes'">
                            <v-icon>room_service</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
            <div class="add_button">
                <v-btn fab dark color="green" to="/admin/restaurants/add">
                    <v-icon dark>add</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from "../../AppConst";

export default {
    data: function () {
        return  {
            restaurants: [
                
            ],
            loading: false
        }
    },

    methods: {
        getRestaurants() {
            this.loading = true;
            axios.get(AppConst.admin_restaurants, {
                params: {

                }
            }).then(response => {
                this.restaurants = response.data.restaurants;
            }).catch(error => {
                try {
                    Android.showDialog("something went wrong", "OK");
                } catch (error) {
                    window.alert("something went wrong");
                }
            }).finally(() => {
                this.loading = false;
            });
        }
    },

    created: function () {
        this.getRestaurants()
    }
}
</script>

<style scoped>
div.restaurant {
    margin: 10px;
    padding: 20px 0px 20px 20px;
    border: 2px solid grey;
    border-radius: 5px;
    display: flex;
    flex-flow: row;
    align-items: center;
}

div.add_button {
    position: fixed;
    bottom: 10px;
    right: 10px;
}

div.rest {
    flex-grow: 1;
}
div.action {
    flex-grow: 0;
    width: 8%;
    flex-shrink: 0;
}
</style>