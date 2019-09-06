<template>
    <div>
        Dashboard
        <br><br>
        <v-btn class="green" to="/delivery/orders" dark>Orders</v-btn>
        <br><br>
        <v-btn class="green" to="/delivery/issue_discount" dark>Issue Discount Coupon</v-btn>
        <br><br>
        <v-btn class="warning" dark @click="logout">Logout</v-btn>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            logged_in: true
        }
    },
    
    methods: {
        logout: function () {
            this.logged_in = false;
            localStorage.setItem('login_token', "");
            this.$router.push('/delivery/login');
        }
    },
    
    beforeRouteLeave: function(to, from, next) {
        if (to.path == '/delivery/manager' || (to.path == '/delivery/login' && this.logged_in)) {
            try {
                console.log("exit is called");
                Android.exit();
            } catch (error) {
                console.log("exit is called");
            }
        } else {
            next();
        }
    }
}
</script>