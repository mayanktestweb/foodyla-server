<template>
    <div class="search_main">
        <div class="search_box">
            <div class="input">
                <input type="text" v-model="search_text" placeholder="Search Restaurants">
            </div>
            <div class="go" @click="startSearch()">
                <v-icon color="white">send</v-icon>
            </div>
        </div>
        <div class="processing" v-if="fetching">
            <v-progress-circular
            indeterminate
            color="warning"
            ></v-progress-circular>
        </div>
        
        <div class="search_results" v-else>
            <div class="restaurants">
                
            </div>
            <div class="dishes"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from '../../AppConst';

export default {
    data: function() {
        return {
            search_text: "",
            fetching: false,
            error_msg: ""
        }
    },
    created: function() {
        this.$store.dispatch('setActiveOption', 'search');
    },

    methods: {
        startSearch: function() {
            this.fetching = true;
            console.log(AppConst.search_url);
            axios.get(AppConst.search_url, {
                params: {
                    query: this.search_text
                }
            }).then((response) => {
                
                
                if (response.status == 200) {
                    
                }
            }).catch(error => {
                console.log(error);
                this.error_msg = "Something went wrong";
            }).finally(()=> this.fetching = false);
        }
    }
}
</script>

<style scoped>
div.search_box {
    display: flex;
    flex-flow: row;
    background: darkorange;
}

div.input {
    padding: 5px;
    flex-grow: 1;
}

div.input input {
    width: 100%;
    height: 40px;
    background: white;
    border-radius: 5px;
    padding-left: 5px;
}

div.go {
    
    width: 10%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

div.processing {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
}
</style>
