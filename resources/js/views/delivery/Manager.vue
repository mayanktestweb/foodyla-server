<template>
    
</template>

<script>
export default {
    
    created: function () {
        this.$store.dispatch('showBottomNav', false);
        if (localStorage.getItem('login_token') == null || localStorage.getItem('login_token') == "") {
            this.$router.push("/delivery/login");
        } else {
            this.$router.push("/delivery/dashboard");     
        }
    }
}
</script>