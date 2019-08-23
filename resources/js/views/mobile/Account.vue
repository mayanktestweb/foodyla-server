<template>
    <div class="grey lighten-3" style="height: 100%;">
        <div class="header white">
            <div class="name title grey--text text--darken-2">{{this.$store.state.user_name}}</div>
            <div class="spacer"></div>
            <div class="avatar">
                <img :src="this.$store.state.user_image" alt="">
            </div>
        </div>

        <div class="contact white">
            <div class="heading font-weight-bold grey--text text--darken-1">Contact Details</div>
            <div class="email font-weight-medium grey--text text--darken-2">Email : {{this.$store.state.user_email}}</div>
            <div class="phone font-weight-medium grey--text text--darken-2">Mobile Number : 
                <span v-if="this.$store.state.mobile_number != null && this.$store.state.mobile_number.match(/\b\d{10}\b/)">
                    {{this.$store.state.mobile_number}}
                </span>
                <v-btn v-else color="success" flat to="/app/add_mobile_number">ADD MOBILE NUMBER</v-btn>
            </div>
        </div>

        <div class="contact white">
            <v-btn color="success" dark to="/app/orders">Show Orders</v-btn>
            <v-btn color="warning" dark @click="logout()">Logout</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout: function() {
            this.$store.dispatch("setMobileNumber", null);
            try {
                Android.logout();
            } catch (error) {
                
            }
        }
    },

    created: function() {
        this.$store.dispatch('setActiveOption', 'account');
    }
}
</script>


<style scoped>
div.header {
    display: flex;
    flex-flow: row;
    height: 80px;
    padding: 5px;
    box-shadow: 2px 2px 3px lightgrey;
}

div.name {
    display: flex;
    align-items: center;
    padding: 5px;
}

div.spacer {
    flex-grow: 1;
}

div.avatar {
    height: 70px;
    width: 70px;
    border-radius: 35px;
    flex-shrink: 0;
}

div.avatar img {
    width: 100%;
    height: 100%;
    border-radius: 35px;
}

div.contact {
    display: flex;
    flex-flow: column;
    margin-top: 50px;
}

div.contact div {
    padding-left: 8px;
    font-size: 1.2em;
}
div.heading {
    padding: 8px;
}
</style>
