<template>
    <div class="main white">
        <div class="msg title grey--text text--darken-3">{{this.$store.state.current_location}}</div>
        <div class="details">
            <v-textarea label="Add Description" v-model="description"></v-textarea>
        </div>
        <div class="action">
            <v-btn color="success" class="white--text" :disabled="disabled" block @click="saveLocation()">
                {{btn_txt}}
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            btn_txt: "Confirm Location",
            description: ""
        }
    },
    created: function() {
        this.$store.dispatch("showBottomNav", false);
    },

    methods: {
        saveLocation: function() {
            this.$store.dispatch('setLocationDescription', this.description);
            localStorage.setItem("current_location", this.$store.state.current_location);
            localStorage.setItem("location_description", this.description);
            localStorage.setItem("latlong", JSON.stringify(this.$store.state.lat_long));
            this.$router.push("/app/landing_page");
        }
    },

    computed: {
        disabled: function() {
            if(this.description == "") return true;
            else return false;
        }
    }
}
</script>

<style scoped>
div.main {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
}

div.main > div {
    width: 95%;
}

div.msg {
    padding: 20px;
    text-align: center
}
</style>
