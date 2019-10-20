<template>
    <div class="dash">
        <div class="w_cont" @click="$router.push('/admin/restaurants')">
            <div class="grey--text text--darken-3 title">Restaurant Management</div>
        </div>
        <div class="w_cont" @click="$router.push('/admin/orders')">
            <div class="grey--text text--darken-3 title">Orders Management</div>
        </div>
    </div>
</template>

<script>
export default {
    created: function () {
        this.$store.dispatch('showBottomNav', false);
    }
}
</script>

<style scoped>
div.w_cont {
    margin: 10px;
    padding: 20px;
    border: 2px solid grey;
    border-radius: 5px;
}
</style>