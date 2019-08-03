<template>
    <div>Search</div>
</template>

<script>
export default {
    created: function() {
        this.$store.dispatch('setActiveOption', 'search');
    }
}
</script>
