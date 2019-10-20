<template>
    <div>
        <input type="text" v-model="name" placeholder="Name"><br>
        <input type="text" v-model="menu_id" placeholder="Menu Id"><br>
        <v-autocomplete
            :items="['veg', 'non-veg', 'egg']"
            label="Type"
            v-model="type"
        ></v-autocomplete>
        <br>
        <input type="text" v-model="image" placeholder="Image"><br>
        <input type="checkbox" :checked="isBestSeller" v-model="isBestSeller"> Is BestSeller<br>
        <br>
        <div class="action_w">
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="add()">Add</v-btn>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from '../../../AppConst';

export default {
    props: ['restaurant_id'],

    data() {
        return {
            name: "",
            menu_id: "",
            type: "",
            image: "",
            isBestSeller: false
        }
    },

    methods: {
        add() {
            axios.post(AppConst.add_dish, {
                restaurant_id: this.restaurant_id,
                name: this.name,
                menu_id: this.menu_id,
                type: this.type,
                image: this.image,
                isBestSeller: this.isBestSeller
            }).then(response => {
                window.alert(response.data);
            }).catch(error => {
                window.alert("something went wrong");
            });
        }
    }
}
</script>

<style scoped>
input[type="text"] {
    border: 1px solid grey;
}

div.action_w {
    display: flex;
    flex-flow: row;
}
</style>