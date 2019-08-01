<template>
    <v-layout class="grey lighten-2">
        <div class="floating_header font-weight-medium" v-if="showFloatingHeader">
            <div>
                <div><v-icon left @click="goBack">arrow_back</v-icon></div>
                <div> {{this.$store.getters.restaurantById(id).name}}</div>
            </div>
        </div>
        <v-flex sm12>
            <div v-if="this.$store.getters.loading">
                <loading-skeliton v-for="n in 5" :key="n"></loading-skeliton>
            </div>
            <div v-else>
                <v-layout column class="white">
                    <v-flex>
                        <v-layout allign-center pa-3>
                            <v-icon left @click="goBack">arrow_back</v-icon>
                            <h2>{{this.$store.getters.restaurantById(id).name}}</h2>
                        </v-layout>
                        <v-divider></v-divider>
                    </v-flex>
                    <v-flex>
                        <v-layout justify-space-around align-center pa-2>
                            <div class="font-weight-regular">{{this.$store.getters.restaurantById(id).rating}} <v-icon color="yellow darken-3" size="16">star</v-icon></div>
                            <div class="font-weight-regular">Dilevers In: 40 - 50 mins</div>
                        </v-layout>
                        <v-divider></v-divider>
                    </v-flex>
                    <v-flex>
                        <div class="veg_container" v-if="pure_veg">
                            <div class="leaf">
                                <img src="../../assets/green_leaf.png" alt="pure veg">
                            </div>
                            <div class="leaf_text font-weight-medium grey--text text--darken-2">Pure Vegiterian</div>              
                        </div>
                        <div class="veg_container" v-else>
                            <div class="switch_container">
                                <v-layout row align-center>
                                    <v-switch v-model="veg_only" color="green"></v-switch>
                                    <span class="font-weight-medium grey--text">Veg Only</span>
                                </v-layout>
                            </div>
                            <div class="switch_container">
                                <v-layout row align-center v-if="veg_only">
                                    <v-switch v-model="contains_egg" 
                                    color="orange"></v-switch>
                                    <span class="font-weight-medium grey--text">Contains Egg</span>
                                </v-layout>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout column class="white" mt-4>
                    <v-flex sm12 my-2>
                        <v-container>
                            <span class="font-weight-medium" style="font-size: 1.2em">Bestsellers</span>
                        </v-container>
                    </v-flex>
                    <v-flex sm12>
                        <v-container grid-list-lg>
                            <v-layout row wrap justify-space-around>
                                <div class="card_wrapper" v-for="dish in $store.getters.restaurant_page.best_sellers" 
                                :key="dish.id">
                                    <div class="card_body" v-if="shouldShow(dish)">
                                        <img :src="dish.image" alt="">
                                        <div class="card_text">
                                            <veg-icon v-if="dish.type == 'veg'"></veg-icon>
                                            <non-veg-icon v-else-if="dish.type == 'non-veg'"></non-veg-icon>
                                            <egg-icon v-else></egg-icon>
                                            <h4>{{dish.name}}</h4>                                            
                                        </div>
                                        <div class="card_action">
                                            <div><span class="font-weight-medium">&#x20B9; {{dish.varients[0].price}}</span></div>
                                            <div>
                                                <add-dish-button :restaurant_id="id" :dish="dish" 
                                                    v-on:show_varients="showVarients($event)" 
                                                    ></add-dish-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>

                <v-layout class="white" column mt-4 v-for="(items, index) in sorted_menu" :key="index" :id="getMenuCssId(items.menuId)">
                    <v-subheader>{{items.menuId}}</v-subheader>
                    <v-flex sm12 v-for="item in items.items" :key="item.id">
                        <v-container v-if="shouldShow(item)">
                            <v-layout row align-center>
                                <div style="width: 10%;">
                                    <veg-icon v-if="item.type == 'veg'"></veg-icon>
                                    <non-veg-icon v-else-if="item.type == 'non-veg'"></non-veg-icon>
                                    <egg-icon v-else></egg-icon>
                                </div>
                                <div>
                                    <div><h4>{{item.name}}</h4></div>
                                    <div><p class="grey--text text--grey-darken-3">&#x20B9; {{item.varients[0].price}}</p></div>
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <add-dish-button :restaurant_id="id" :dish="item" 
                                        v-on:show_varients="showVarients($event)" 
                                        ></add-dish-button>
                                </div>
                            </v-layout>
                            <v-divider></v-divider>
                        </v-container>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex sm12>
                        <foot></foot>
                    </v-flex>
                </v-layout>
            </div>
        </v-flex>
        <div class="bottom_box">
            <v-menu
            transition="slide-y-transition"
            bottom
            >
                <template v-slot:activator="{ on }">
                    <div v-ripple class="menubutton font-weight-medium white--text subheading" 
                    v-on="on">
                        Menu
                    </div>
                </template>
                <v-list>
                    <v-list-tile
                    v-for="item in getMenuIds()"
                    :key="item"
                    @click="scrollTo(item)"
                    >
                    <v-list-tile-title>{{ item }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
                
            <cart-indicator></cart-indicator>
        </div>
        
        <v-flex sm12 v-if="dish != null" shrink>
            <varients-pop-up :show="showVarientsDialog" :restaurant_id="id"
            :dish="dish" v-on:hide_varients="hideVarients">

            </varients-pop-up>
        </v-flex>
    </v-layout>
</template>

<script>
import RestaurantSkeliton from "../../components/RestaurantSkeliton";
import NonVegIcon from "../../components/icons/NonVegIcon";
import VegIcon from "../../components/icons/VegIcon";
import EggIcon from "../../components/icons/EggIcon";
import AddDishButton from "../../components/AddDishButton";
import CartIndicator from "../../components/CartIndicator";
import VarientsPopUp from "../../components/VarientsPopUp";
import Footer from "./Footer";
import { setTimeout } from 'timers';

export default {
    props: ['id'],
    data: function(){
        return {
            veg_only: false,
            contains_egg: false,
            showVarientsDialog: false,
            dish: null,
            show_menu_card: false
        }
    },
    computed: {
        pure_veg: function() {
            var itsVeg = true;
            this.$store.getters.restaurant_page.menu.forEach(dish => {
                itsVeg = itsVeg && (dish.type == 'veg');
            });

            return itsVeg;
        },
        showFloatingHeader: function() {
            return false;
        },
        getBestSellers: function() {
            var rec = [];

            this.$store.restaurant_page.best_sellers.forEach( value => {
                this.$store.restaurant_page.menu.forEach( item => {
                    if (item.id == value) rec.push(item); 
                });
            });

            if(this.veg_only && !contains_egg) {
                var fil = rec.filter((item) => {
                    if(item.type == "veg") return item;
                });

                return fil;

            } else if(this.veg_only && contains_egg) {
                var fil = rec.filter((item) => {
                    if(item.type == "veg" || item.type == "egg") return item;
                });

                return fil;
            } else return rec;
        },
        sorted_menu: function() {
            var menuIds = this.getMenuIds();

            var sortedMenu = [];

            menuIds.forEach(menuId => {
                var dishesByMenuId = this.getDishesByMenuId(menuId);

                var toInsert = {'menuId': menuId, 'items': dishesByMenuId};
                sortedMenu.push(toInsert);
            });

            return sortedMenu;
        }
    },
    methods: {
        goBack: function() {
            history.back();
        },
        shouldShow: function(item) {
            if(this.veg_only && !this.contains_egg) {
                if(item.type == "veg") return true;
                else return false;
            } else if (this.veg_only && this.contains_egg) {
                if(item.type == "veg" || item.type == "egg") return true;
                else return false;
            } else return true;
        },

        showVarients: function(dish) {
            this.dish = dish;
            setTimeout(()=>{
                this.showVarientsDialog = true;
            } , 200);
        },

        hideVarients: function() {
            this.showVarientsDialog = false;
        },

        getMenuIds: function() {
            var menuIds = [];
            this.$store.getters.restaurant_page.menu.forEach(item => {
                if(!menuIds.includes(item.menu_id)) menuIds.push(item.menu_id);
            });

            return menuIds;
        },

        getDishesByMenuId: function(menuId) {
            var dishesByMenuId = this.$store.getters.restaurant_page.menu.filter(item => {
                if(item.menu_id == menuId) return true;
                else return false;
            });

            return dishesByMenuId;
        },

        getMenuCssId: function(items) {
            return items.replace(" ", "_");
        },
        
        scrollTo: function(target) {
            return this.$vuetify.goTo("#"+this.getMenuCssId(target));
        }
    },
    components: {
        'loading-skeliton': RestaurantSkeliton,
        'non-veg-icon': NonVegIcon,
        'veg-icon': VegIcon,
        'egg-icon': EggIcon,
        'add-dish-button': AddDishButton,
        'cart-indicator': CartIndicator,
        'varients-pop-up': VarientsPopUp,
        'foot': Footer
    },
    created: function() {
        this.$store.dispatch("showBottomNav", false);
    },

    beforeRouteEnter: function(to, from, next) {
       
        next(vm => {
            if(from.path != '/mobile/cart') {
                vm.$store.dispatch("loadRestaurantPage", vm.id);
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.floating_header {
    position: fixed;
    z-index: 1;
    width: 100%;
}

.floating_header > div {
    display: flex;
    align-items: center;
    background: white;
    padding: 10px;
    border-bottom: 1px solid darkgray;
}

div.veg_container {
    display: flex;
    align-items: center;
}
div.leaf {
    width: 7%;
    margin: 10px;
}
div.leaf img {
    width: 100%;
    height: auto;
}

div.switch_container {
    padding-left: 20px;
}

div.card_wrapper {
    width: 47%;
    margin-bottom: 15px;
}

div.card_body {
    width: 100%;
    border: 1px solid lightgrey;
    box-shadow: 2px 2px 2px lightgrey;
}

div.card_body img {
    width: 100%;
    height: auto;
}

div.card_text {
    padding: 8px;
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
}

div.card_action {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 6px;    
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
}

div.bottom_box {
    position: fixed;
    width: 100%;
    bottom: 0px;
    pointer-events: none;
}

div.menubutton {
    position: relative;
    width: 88px;
    height: 36px;
    border-radius: 18px;
    background: dodgerblue;
    text-align: center;
    line-height: 36px;
    box-shadow: 2px 2px 5px grey;
    bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    pointer-events: auto;
}

div.menu_card {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    bottom: 5px;
}
</style>
