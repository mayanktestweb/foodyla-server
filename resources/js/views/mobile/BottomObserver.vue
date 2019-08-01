<template>
    <div class="observer white">
        <v-layout align-center justify-center v-if="loading">
            <v-progress-circular indeterminate color="green"></v-progress-circular>
        </v-layout>
    </div>
</template>

<script>
export default {
    props: {
        loading: Boolean
    },
    data: function() {
        return {
            observer: null
        }
    },

    mounted: function() {
        this.observer = new IntersectionObserver(([entry]) => {
            if(entry && entry.isIntersecting) {
                this.$emit('intersect');
            }
        });

        this.observer.observe(this.$el);
    }
}
</script>

<style scoped>
    div.observer {
        min-height: 1px;
    }
</style>
