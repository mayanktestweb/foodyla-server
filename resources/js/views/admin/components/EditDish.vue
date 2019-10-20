<template>
    <div>
        <div class="mbody">
            <input type="text" v-model="name" placeholder="Name"><br>
            <input type="text" v-model="menu_id" placeholder="Menu Id"><br>
            <input type="text" v-model="type" placeholder="Type"><br>
            <input type="text" v-model="image" placeholder="Image"><br>
            <img :src="image" alt="image"><br>
            <input type="checkbox" v-model="isBestSeller" :checked="isBestSeller"><br><br>
            <v-divider></v-divider>
            <div class="action_w">
                <v-spacer></v-spacer>
                <v-btn color="primary" dark @click="save()">Save</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import AppConst from '../../../AppConst';
import axios from 'axios';

export default {
    props: ['dish'],
    data() {
        return {
            name: "",
            menu_id: "",
            type: "",
            image: "",
            isBestSeller: null
        }
    },

    created() {
        this.init();
    },

    methods: {
        init() {
            this.name = this.dish.name;
            this.menu_id = this.dish.menu_id;
            this.type = this.dish.type;
            this.image = this.dish.image;
            this.isBestSeller = this.dish.isBestSeller;
        },

        save() {
            axios.post(AppConst.edit_dish, {
                id: this.dish.id,
                name: this.name,
                menu_id: this.menu_id,
                type: this.type,
                image: this.image,
                isBestSeller: this.isBestSeller
            }).then(response => {
                if (response.data != "success") {
                    window.alert("something went wrong");
                } else window.alert("success");
            }).catch(error => {
                window.alert("something went wrong");
            });
        }
    }
}
</script>

<style scoped>
div.action_w {
    display: flex;
    flex-flow: row;
}

input[type="text"] {
    border: 1px solid grey;
}

img {
    width: 100px;
    height: 100px;
}
</style>