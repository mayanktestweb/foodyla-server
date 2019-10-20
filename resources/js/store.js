import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import AppConst from "./AppConst";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        app_started: false,
        show_bottom_nav: false,
        active_option: 'restaurants',
        loading: false,
        total_restaurants: Number,
        restaurants: [],
        restaurant_page: {
            best_sellers: [],
            menu: [
                {id: 1, name: 'Dal Makhni', menu_id: 'Dal', type: 'veg', image: 'http://192.168.43.116/img/dal_makhni.jpg', varients: [{id: 1, label: 'Full', price: 65}]},
                {id: 2, name: 'Butter Chicken', menu_id: 'Chicken', type: 'non-veg', image:'http://192.168.43.116/img/butter_chicken.jpg', varients: [{id: 2, label: 'Half', price: 80}, {id: 3, label:'Full', price: 120}]},
                {id: 3, name: 'Shahi Paneer', menu_id: 'Classic Indian', type: 'veg', image: '', varients: [{id: 4, label: 'Half', price: 70}, {id: 5, label: 'Full', price: 90}]},
                {id: 4, name: 'Jhoola Bhatura', menu_id: 'Classic Indian', type: 'veg', image: '', varients: [{id: 6, label: 'Full', price: 40}]},
                {id: 5, name: 'Chiken Shorba', menu_id: 'Chicken', type: 'non-veg', image: 'http://192.168.43.116/img/chicken_shorba.jpg', varients: [{id: 7, label: 'Full', price: 70}]},
                {id: 6, name: 'Egg Curry', menu_id: 'Egg Dishes', type: 'egg', image: 'http://192.168.43.116/img/chicken_shorba.jpg', varients: [{id: 8, label: 'Full', price: 70}]},
                {id: 7, name: 'Omlet', menu_id: 'Egg Dishes', type: 'egg', image: 'http://192.168.43.116/img/chicken_shorba.jpg', varients: [{id: 9, label: 'Single Egg', price: 30}, {id: 10, label: 'Double Egg', price: 40}]}
            ]
        },
        cart_restaurant: null,
        cart: [],
        android_response: "nothing",
        
        user_email: 'mayanktest@gmail.com',
        user_name: 'mayank chauhan',
        user_image: null,
        user_id: 6,
        mobile_number: null,

        gps_permission: false,
        lat_long: {lat: null, long: null},
        current_location: "",
        location_description: "",
        location_history: [],
        discount_coupons: [
            
        ],
        applied_discount_coupon: null,
        delivery_charge: 10,
        other_discount: 0,
        cashback_string: null
    },

    mutations: {

        SET_APP_STARTED(state, value) {
            state.app_started = value;
        },

        SHOW_BOTTOM_NAV(state, value) {
            state.show_bottom_nav = value;
        },

        SET_ACTIVE_OPTION(state, value) {
            state.active_option = value;
        },

        EMPTY_RESTAURANTS(state) {
            state.restaurants = [];
        },

        LOAD_RESTAURANTS(state, page) {
            state.loading = true;
            axios.get(AppConst.restaurants_url, {
                params: {
                    page: page,
                    location: state.current_location
                }
            }).then(response => {
                if (response.status == '200') {
                    state.loading = false;
                    response.data.restaurants.data.forEach(item => state.restaurants.push(item));
                    state.total_restaurants = response.data.restaurants.total;
                } else {
                    try {
                        Android.showToast("Something went wrong. Restart App.");
                    } catch (error) {
                        
                    }
                }
            });
        },

        LOAD_RESTAURANT_PAGE(state, id) {
            state.loading = true;
            state.restaurant_page.best_sellers = [];
            axios.get(AppConst.restaurant_page+id).then(response => {
                state.loading = false;
                if(response.status == '200') {
                    state.restaurant_page.menu = response.data;
                    state.restaurant_page.menu.forEach(dish => {
                        if(dish.isBestSeller) state.restaurant_page.best_sellers.push(dish);
                    });
                } else {
                    try {
                        Android.showToast("Sorry something went wrong");
                    } catch (error) {
                        
                    }
                }
            });
        },

        REMOVE_DISH(state, dish_id) {
            
            for(var i=0; i<state.cart.length; i++) {
                if(state.cart[i].dish_id == dish_id) {
                    state.cart.splice(i, 1);
                    break;
                }
            }
        },

        SET_CART_RESTAURANT(state, cart_restaurant) {
            if(state.cart_restaurant == null || state.cart_restaurant != cart_restaurant) {
                state.cart = [];
            }
            state.cart_restaurant = cart_restaurant;
        },

        ADD_DISH(state, dish) {
            state.cart.push(dish);
        },

        REMOVE_DISH_VARIENT(state, varient_id) {
            for(var i=0; i<state.cart.length; i++) {
                if(state.cart[i].varient_id == varient_id) {
                    state.cart.splice(i, 1);
                    break;
                }
            }
        },

        UPDATE_CART_VARIENTS(state, varients_data) {
            state.cart.forEach(item => {
                item.varient_price = varients_data[item.varient_id].price;
            });

            state.restaurant_page.menu.forEach(item => {
                item.varients.forEach(varient => {
                    if(varients_data[varient.id] != null) varient.price = varients_data[varient.id].price;
                })
            });
        },

        SET_ANDROID_RESPONSE(state, android_response) {
            state.android_response = android_response;
        },

        SET_GPS_PERMISSION(state, value) {
            state.gps_permission = value;
        },

        SET_LAT_LONG(state, value) {
            state.lat_long.lat = value.lat;
            state.lat_long.long = value.long;
        },

        SET_CURRENT_LOCATION(state, value) {
            state.current_location = value;
        },

        SET_LOCATION_DESCRIPTION(state, value) {
            state.location_description = value;
        },

        SET_USER_NAME(state, value) {
            state.user_name = value;
        },

        SET_USER_ID(state, value) {
            state.user_id = value;
        },

        SET_USER_EMAIL(state, value) {
            state.user_email = value;
        },

        SET_USER_IMAGE(state, value) {
            state.user_image = value;
        },

        SET_MOBILE_NUMBER(state, value) {
            state.mobile_number = value;
        },

        SET_DISCOUNT_COUPONS(state, value) {
            state.discount_coupons = value;
        },

        SET_APPLIED_DISCOUNT_COUPON(state, value) {
            state.applied_discount_coupon = value;
        },

        SET_DELIVERY_CHARGE(state, value) {
            state.delivery_charge = value;
        },
        
        SET_OTHER_DISCOUNT(state, value) {
            state.other_discount = value;
        },

        SET_CASHBACK_STRING(state, value) {
            state.cashback_string = value;
        }
    },

    actions: {
        setAppStarted(context, value) {
            context.commit('SET_APP_STARTED', value);
        },

        showBottomNav({ commit }, value) {
            setTimeout(()=>{commit('SHOW_BOTTOM_NAV', value)}, 500);
        },
        setActiveOption(context, value) {
            context.commit('SET_ACTIVE_OPTION', value);
        },
        emptyRestaurants(context) {
            context.commit('EMPTY_RESTAURANTS');
        },
        loadRestaurants(context, page) {
            context.commit('LOAD_RESTAURANTS', page);
        },
        loadRestaurantPage(context, id) {
            context.commit('LOAD_RESTAURANT_PAGE', id);
        },

        removeDish(context, dish_id) {
            context.commit('REMOVE_DISH', dish_id);
        },

        setCartRestaurant(context, cart_restaurant) {
            context.commit('SET_CART_RESTAURANT', cart_restaurant);
        },

        addDish(context, dish) {
            context.commit('ADD_DISH', dish);
        },

        removeDishVarient(context, varient_id) {
            context.commit('REMOVE_DISH_VARIENT', varient_id);
        },

        updateCartVarients(context, updateData) {
            context.commit('UPDATE_CART_VARIENTS', updateData);
        },

        setAndroidResponse(context, android_response) {
            context.commit('SET_ANDROID_RESPONSE', android_response);
        },

        setGpsPermission(context, value) {
            context.commit('SET_GPS_PERMISSION', value);
        },

        setLatLong(context, value) {
            context.commit('SET_LAT_LONG', value);
        },

        setCurrentLocation(context, value) {
            context.commit('SET_CURRENT_LOCATION', value);
        },

        setLocationDescription(context, value) {
            context.commit('SET_LOCATION_DESCRIPTION', value);
        },

        setUserId(context, value) {
            context.commit('SET_USER_ID', value);
        },

        setUserName(context, value) {
            context.commit('SET_USER_NAME', value);
        },

        setUserEmail(context, value) {
            context.commit('SET_USER_EMAIL', value);
        },

        setUserImage(context, value) {
            context.commit('SET_USER_IMAGE', value);
        },

        setMobileNumber(context, value) {
            context.commit('SET_MOBILE_NUMBER', value);
            localStorage.setItem("mobile_number", value);
        },

        setDiscountCoupons(context, value) {
            context.commit('SET_DISCOUNT_COUPONS', value);
        },

        setAppliedDiscountCoupon(context, value) {
            context.commit('SET_APPLIED_DISCOUNT_COUPON', value);
        },

        setDeliveryCharge(context, value) {
            context.commit('SET_DELIVERY_CHARGE', value);
        },

        setOtherDiscount(context, value) {
            context.commit('SET_OTHER_DISCOUNT', value);
        },

        setCashbackString(context, value) {
            context.commit("SET_CASHBACK_STRING", value);
        }
    },

    getters: {
        show: state => state.show_bottom_nav,
        active_option: state => state.active_option,
        loading: state => state.loading,
        restaurants: state => state.restaurants,
        restaurantById: (state, getters) => (id) => {
            return getters.restaurants.find(restaurant => restaurant.id == id);
        },
        restaurant_page: state => state.restaurant_page,
        cart: state => state.cart,
        getDishInCartById: (state) => (dish_id) => {
            var dishInCart = [];

            state.cart.forEach(item => {
                if (item.dish_id == dish_id) {
                    dishInCart.push(item);
                }
            });

            return dishInCart;
        },
        android_response: (state) => {return state.android_response},
        gps_permission: (state) => {return state.gps_permission;}
    }
});