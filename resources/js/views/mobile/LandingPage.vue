<template>
    <div>
        <div class="location white" @click="change_location = true">
            <div class="text">
                <div class="ttl"><v-icon size="15" color="orange darken-3">place</v-icon> Current Location</div>
                <div class="lction grey--text text--darken-2 font-weight-medium" style="margin-left:3px;">{{location_name}}</div>
            </div>
            <div class="img">
                <img src="https://foodyla.b-cdn.net/system_icons/upper_bar.png" alt="">
            </div>
        </div>
        
        <div class="restaurants">
            <div class="offer_panel white">
                <first-order-offer></first-order-offer>
            </div>
            <v-layout fill-height column>
                <v-flex sm12>
                    <div v-if="this.$store.getters.loading && 
                            this.$store.getters.restaurants.length == 0">
                        <restaurant-skeliton v-for="n in 5" :key="n"></restaurant-skeliton>
                    </div>
                    <div v-else>
                        <restaurant v-for="restaurant in this.$store.getters.restaurants" 
                        :key="restaurant.id" v-bind:restaurant="restaurant"></restaurant>      

                        <bottom-observer v-on:intersect="intersected()" v-bind:loading="loading"></bottom-observer>
                    </div>
                </v-flex>
                <v-flex sm12>
                    <foote></foote>
                </v-flex>
            </v-layout>
        </div>
        <v-dialog v-model="change_location">
            <v-btn color="orange" large dark block to="/app/set_location">Change Location</v-btn>
        </v-dialog>
    </div>
</template>

<script>
import Burger from "../../components/icons/burger";
import RestaurantSkeliton from "../../components/RestaurantSkeliton";
import Restaurant from "../../components/Restaurant";
import Footer from "./Footer";
import BottomObserver from "./BottomObserver";
import { setTimeout } from 'timers';
import AppConst from '../../AppConst';

import FirstOrderOffer from "../../components/OfferPanels/FirstOrderOffer";

export default {
    data: function() {
        return {
            from_route: null,
            page: 1,
            tabVal: "delivery",
            show: true,
            names: ['a','b','c','d','e','f','g','h','i','j','k'],
            change_location: false
        }
    },

    components: {
        'restaurant-skeliton': RestaurantSkeliton,
        'restaurant': Restaurant,
        'foote': Footer,
        'bottom-observer': BottomObserver,
        'first-order-offer': FirstOrderOffer
    },

    created: function(){
        this.$store.dispatch('showBottomNav', true)
        this.$store.dispatch('setActiveOption', 'restaurants')
        if(this.$store.getters.restaurants.length == 0) this.$store.dispatch('loadRestaurants', this.page);
        else {
            this.page = this.$store.getters.restaurant/AppConst.restaurant_per_load + 1;
        }
    },

    beforeRouteEnter: function(to, from, next) {
        next(vm => {
            vm.from_route = from.path;
        });
    },

    beforeRouteLeave: function(to, from, next) {

        if (to.path == "/app/payment" || to.path == this.from_route) {
            
            try {
                Android.exit();
            } catch (error) {
                console.log(error);
            }
        } else next();
    },

    methods: {
        intersected: function() {
            if (this.$store.getters.restaurants.length < this.$store.state.total_restaurants) {
                this.page += 1;
                this.$store.dispatch('loadRestaurants', this.page);
            }
        }
    },

    computed: {
        loading: function() {
            return this.$store.state.loading;
        },

        location_name: function() {
            var location_name = this.$store.state.current_location;
            location_name = location_name.split(",");
            location_name = location_name[1];

            return location_name;
        }
    }
}
</script>

<style scoped>
div.location {
    position: fixed;
    height: 60px;
    width: 100%;
    font-size: 1.5em;
    z-index: 1;
    box-shadow: 1px 1px 2px gray;
}

div.offer_panel {
    margin: 5px;
}

div.text {
    margin: 3px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}

div.ttl {
    font-size: 0.6em;
    display: flex;
    flex-flow: row;
    align-items: center;
}

div.location > div.img {
    position: absolute;
    top: 2px;
    z-index: -1;
    opacity: 0.3;
    left: 80px;
    height: 56px;
}

div.location > div.img img {
    height: 100%;
    width: auto;
}

div.restaurants {
    margin-top: 61px;
}

div.img {
    width: 50%;
}

div.img img {
    width: 100%;
    height: auto;
}

div.mylist {
    padding: 20px;
    font-size: 2em;
    margin-bottom: 1px;
}
</style>
