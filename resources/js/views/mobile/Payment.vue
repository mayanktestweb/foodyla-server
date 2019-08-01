<template>
    <div class="mainP white">
        <div class="titleP green--text title">
            Select Payment Method
        </div>
        <div class="divider"></div>

        <div class="payment_option" style="opacity: 0.3;" @click="showMsg()">
            <div class="img">
                <img src="http://192.168.43.116/img/paytm.png" alt="paytm image">
            </div>
            <div class="name subheading font-weight-medium grey--text text--darken-3">
                Paytm
            </div>
        </div>
        <div class="divider"></div>
        
        <div class="payment_option" style="opacity: 0.3;" @click="showMsg()">
            <div class="img"><img src="http://192.168.43.116/img/phonepe.png" alt="phonepe"></div>
            <div class="name subheading font-weight-medium grey--text text--darken-3">PhonePe</div>
        </div>
        <div class="divider"></div>

        <div class="payment_option" @click="confirm_cod = true">
            <div class="img">
                <img src="http://192.168.43.116/img/cash.png" alt="cash">
            </div>
            <div class="name subheading font-weight-medium grey--text text--darken-3">Cash On Delivery</div>
        </div>
        <div class="divider"></div>

        <v-dialog v-model="confirm_cod">
            <v-layout justify-center align-center fill-height class="white">
                <v-btn color="warning" dark block large to="/app/confirm_order">Confirm Cash ON DELIVERY</v-btn>
            </v-layout>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            confirm_cod: false
        }
    },

    created: function(){
        this.$store.dispatch("showBottomNav", false);

        if (this.$store.getters.cart.length == 0) {
            this.$router.push("/app/landing_page");
        }
    },

    methods: {
        showMsg: function() {
            try {
                Android.showToast("This service is not currently available.");
            } catch (error) {
                
            }
        }
    }
}
</script>


<style scoped>
div.mainP {
    display: flex;
    flex-flow: column;
    padding: 0px 8px;
}

div.titleP{
    padding: 15px;
    text-align: center;
    width: 100%;
}

div.payment_option {
    width: 100%;
    display: flex;
    flex-flow: row;
    padding-left: 5px;
}
 
div.payment_option div.img {
    height: 60px;
    width: 60px;
    padding: 8px;
}

div.payment_option div.img img {
    width: 100%;
    height: 100%;
}

div.payment_option div.name {
    padding-left: 8px;
    line-height: 60px;
}

div.divider {
    border-bottom: 1px solid #888;
}
</style>
