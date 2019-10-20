<template>
    <div>
        <div class="dishes" v-for="dish in dishes" :key="dish.id">
            <div class="dish">
                <div class="grey--text text--darken-3 title dish_action">
                    {{dish.name}}
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark @click="editDish(dish)">edit</v-btn>
                </div>
                <div class="varients">
                    <div class="grey--text text--darken-3 font-weight-medium">Varients</div>
                    <div v-for="varient in dish.varients" :key="varient.id">
                        <div class="varient font-weight-light">
                            {{varient.label}}
                            <v-btn color="primary" flat small @click="editVarient(varient)">
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </div>            
                    </div>
                </div>
                <div>
                    <v-btn color="green" dark small @click="addNewVarient(dish)">Add New Varient</v-btn>
                </div>
            </div>
        </div>
        <div v-if="edit_dish">
            <v-dialog v-model="edit_dish">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                        Edit Dish
                    </v-card-title>

                    <v-card-text>
                        <edit-dish :dish="dish_to_edit"></edit-dish>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div v-if="add_dish">
            <v-dialog v-model="add_dish">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                        Add Dish
                    </v-card-title>

                    <v-card-text>
                        <add-dish :restaurant_id="this.id"></add-dish>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div v-if="edit_varient">
            <v-dialog v-model="edit_varient">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                        Edit Varient
                    </v-card-title>

                    <v-card-text>
                        <edit-varient :varient="varient_to_edit"></edit-varient>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div v-if="add_varient">
            <v-dialog v-model="add_varient">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                        Add Varient
                    </v-card-title>

                    <v-card-text>
                        <add-varient :dish="add_varient_dish"></add-varient>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div class="add_button">
            <v-btn fab dark color="green" @click="addDish()">
                <v-icon dark>add</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AppConst from "../../AppConst";
import EditDish from "./components/EditDish";
import EditVarient from "./components/EditVarient";
import AddDish from "./components/AddDish";
import AddVarient from "./components/AddVarient";

export default {
    props: ['id'],
    data() {
        return {
            dishes: [],
            edit_dish: false,
            add_dish: false,
            edit_varient: false,
            dish_to_edit: null,
            varient_to_edit: null,
            add_varient: false,
            add_varient_dish: null
        }
    },

    components: {
        'edit-dish': EditDish,
        'edit-varient': EditVarient,
        'add-dish': AddDish,
        'add-varient': AddVarient
    },

    created() {
        axios.get(AppConst.restaurant_dishes, {
            params: {id: this.id}
        }).then(response => {
            this.dishes = response.data.dishes;
        }).catch(error => {
            window.alert("something went wrong while getting dishes");
        });
    },

    methods: {
        editDish(dish) {
            this.dish_to_edit = dish;
            this.edit_dish = true;
        },

        editVarient(varient) {
            this.varient_to_edit = varient;
            this.edit_varient = true;
        },

        addDish() {
            this.add_dish = true;
        },

        addNewVarient(dish) {
            this.add_varient_dish = dish;
            this.add_varient = true;
        }
    }
}
</script>

<style scoped>
div.dish_action {
    display: flex;
    flex-flow: row;
    align-items: center;
}
div.dish {
    margin: 10px;
    padding: 20px;
    border: 2px solid grey;
    border-radius: 5px;
}
div.add_button {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>