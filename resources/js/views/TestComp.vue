<template>
    <div>
        {{this.$store.state.android_data}}
    </div>
</template>

<script>
export default {
    name: 'testComp',
    data: function() {
        return {
            android_data: "nothing so far"
        }
    },

    methods: {
        xxx: function(data) {
            this.android_data = data;
        }
    }
}
</script>

