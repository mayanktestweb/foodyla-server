<template>
    <div>
        <h2>{{a_name}}</h2>
        <input type="text" name="name" v-model="data"><br><br>
        <button @click="saveSession">Submit</button>
        <br><button @click="showData">Show Data</button>
        <div class="done success" v-if="success"></div>
        <div class="done fail" v-else></div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: function() {
        return {
            success: false,
            data: "",
            a_name: "mayank"
        }
    },
    computed: {
        name: function() {
            if(this.$session.has('name')){
                return this.$session.get('name');
            } 
            else return "nothing man"
        }
    },
    methods: {
        saveSession: function() {
            this.$session.set('name', this.data);
            this.success = true;

            localStorage.name = this.data;
            sessionStorage.setItem('name', this.name);
        }, 
        showData(){
            console.log(sessionStorage.getItem('name'))
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    border: 1px solid black;
}
div.done {
    height: 20px;
    width: 20px;
}

.success {
    background: green;
}

.fail {
    background:red;
}

button {
    background: yellow;
    color: orange;
}
</style>
