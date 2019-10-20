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

        <div>
            <v-dialog v-model="show_dialog">
                <v-card>
                    <v-card-text>
                        <span class="orange--text">
                            {{dialog_message}}
                        </span>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="warning" flat @click="show_dialog = false">
                            Okay
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>    
</template>

<script>
import DiscountCoupon from "../../components/DiscountCoupon";


export default {
    data: function () {
        return {
            show_dialog: false,
            dialog_message: ""
        }
    },

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
            var total = 0;
            this.$store.getters.cart.forEach(item => {
                total += item.varient_price;
            });

            total -= this.$store.state.other_discount;

            if (coupon_obj.coupon_value >= 5 && coupon_obj.coupon_value < 15 && total < 50) {
                this.dialog_message = "Sorry ! This coupon can be applied on orders of ₹50 and above"
                this.show_dialog = true;
            } else if (coupon_obj.coupon_value == 15 && total < 150) {
                this.dialog_message = "Sorry ! This coupon can be applied on orders of ₹150 and above"
                this.show_dialog = true;
            } else if (coupon_obj.coupon_value == 20 && total < 200) {
                this.dialog_message = "Sorry ! This coupon can be applied on orders of ₹200"
                this.show_dialog = true;
            } else {
                this.$store.dispatch('setAppliedDiscountCoupon', coupon_obj);
                this.$router.go(-1);
            }
        }
    }
}
</script>

<style scoped>

</style>