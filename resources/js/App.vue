<template>
    <v-app>
        <router-view></router-view>

        <v-bottom-nav :active.sync="this.$store.getters.active_option" 
        :value="this.$store.getters.show" fixed color="trasparent">
            <v-btn
                color="amber darken-4"
                flat
                value="restaurants"
            >
                <span>Restaurants</span>
                <v-icon>restaurant</v-icon>
            </v-btn>

            <v-btn
                color="amber darken-4"
                flat
                value="search"
            >
                <span>Search</span>
                <v-icon>search</v-icon>
            </v-btn>

            
            <v-btn
                color="amber darken-4"
                flat
                value="cart" to="/mobile/cart"
            >
                <span>Cart</span>
                <v-badge color="amber darken-4" right :value="$store.getters.cart.length > 0">
                    <template v-slot:badge>
                        <span class="caption">{{$store.getters.cart.length}}</span>
                    </template>
                    <v-icon>shopping_cart</v-icon>
                </v-badge>
            </v-btn>
        

            <v-btn
                color="amber darken-4"
                flat
                value="account" to="/app/account"
            >
                <span>Account</span>
                <v-icon>people</v-icon>
            </v-btn>
        </v-bottom-nav>

        
    </v-app>
</template>

<script>
export default {
    data: function() {
        return {
            data: "nothing yet"
        }
    },
    methods: {
        xxx: function (data) {
            // body...
            this.data = data;
        }
    },
    created: function() {
        this.$store.dispatch('showBottomNav', true)

        if (localStorage.getItem('mobile_number') != null) {
            this.$store.dispatch('setMobileNumber', localStorage.getItem("mobile_number"));
        }
    }
}
</script>
