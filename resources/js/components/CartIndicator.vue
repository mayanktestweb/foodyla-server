<template>
    <router-link tag="span" to="/mobile/cart">
        <div class="main" v-if="this.$store.getters.cart.length > 0">
            <div class="items">
                <h4 class="white--text">{{items}} Item<span v-if="items > 1">s</span></h4>
                <h2 class="white--text">&#x20B9; {{total_cost}}</h2>
            </div>
            <div class="strech"></div>
            <div class="btn">
                <span class="subheading font-weight-medium white--text">VIEW CART</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    data: function() {
        return {
            
        }
    },

    computed: {
        items: function() {
            return this.$store.getters.cart.length;
        },
        total_cost: function() {
            var totalCost = 0;
            this.$store.getters.cart.forEach(item => {
                totalCost += item.varient_price;
            });
            return totalCost;
        }
    }
}
</script>


<style scoped>
div.pd {
    padding-left: 8px;
}

div.main {
    position: relative;
    width: 100%;
    bottom: 0px;
    min-height: 60px;
    background: linear-gradient(to right, #37cf37, darkgreen);
    display: flex;
    pointer-events: auto;
}

div.items {
    width: 25%;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
    justify-items: center;
    align-content: center;
    line-height: 30px;
}

div.strech {
    flex-grow: 1;
    min-width: 30%;
}

div.btn {
    width: 30%;
    height: 100%;
    line-height: 60px;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
}
</style>
