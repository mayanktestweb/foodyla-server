<template>
    <div class="dis_main">
        <div class="back">
            <v-btn flat color="blue-grey" @click="$router.go(-1)">
                <v-icon left>arrow_back</v-icon> Back
            </v-btn>
        </div>
        <div v-for="coupon in sorted_coupons" :key="coupon.id" @click="applyCoupon(coupon)">
            <discount-coupon :coupon="coupon"></discount-coupon>
        </div>
    </div>    
</template>

<script>
import DiscountCoupon from "../../components/DiscountCoupon";


export default {
    components: {
        'discount-coupon': DiscountCoupon 
    },

    computed: {
        sorted_coupons: function () {
            var coupons = this.$store.state.discount_coupons;

            coupons.sort(function(a, b){
                return a.coupon_value > b.coupon_value;
            });

            return coupons;
        }
    },

    methods: {
        applyCoupon: function(coupon_obj) {
            this.$store.dispatch('setAppliedDiscountCoupon', coupon_obj);
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

</style>