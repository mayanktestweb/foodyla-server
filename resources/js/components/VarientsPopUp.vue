<template>
    <v-bottom-sheet v-model="myshow">
        <v-layout class="white" column>
            <v-flex>
                <v-layout column>
                    <div style="padding: 8px; display:flex; align-items:center;">
                        <veg-icon v-if="this.dish.type == 'veg'"></veg-icon>
                        <non-veg-icon v-else-if="this.dish.type == 'non-veg'"></non-veg-icon>
                        <egg-icon v-else></egg-icon>
                        <h3 class="grey--text text--darken-3" style="padding: 8px;">{{this.dish.name}}</h3>
                    </div>
                    <h4 style="padding-left: 8px;" class="grey--text text--darken-2">Quantity</h4>
                </v-layout>
            </v-flex>            
            <v-radio-group v-model="selected_varient">
                <v-layout column v-for="varient in this.dish.varients" :key="varient.id" mx-3 mb-2>
                    <v-radio color="green" :value="varient">
                        <template v-slot:label>
                            <div style="display:flex; flex-flow:row;">
                                <div style="margin-left:8px;">{{varient.label}}</div>
                                <div style="margin-left:15px;"><span>&#x20B9;</span>{{varient.price}}</div>
                            </div>
                        </template>
                    </v-radio>
                </v-layout>
            </v-radio-group>
            <v-flex>
                <v-btn block color="green" dark large @click="this.addToCart">
                    <span class="title">Add Item  &#x20B9;{{selected_varient.price}}</span>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-bottom-sheet>
</template>

<script>
import VegIcon from "./icons/VegIcon";
import NonVegIcon from "./icons/NonVegIcon";
import EggIcon from "./icons/EggIcon";

export default {
    props: ['show', 'dish', 'restaurant_id'],
    data: function() {
        return {
            myshow : null,
            selected_varient: this.dish.varients[0] 
        }
    },

    created: function() {
        this.myshow = this.show;
    },

    components: {
        'veg-icon': VegIcon,
        'non-veg-icon': NonVegIcon,
        'egg-icon': EggIcon
    },

    methods: {
        getLabel: function(varient) {
            return varient.label+" "+varient.price;
        },
        addToCart: function() {
            this.$store.dispatch('setCartRestaurant', this.restaurant_id);
            this.$store.dispatch('addDish', 
                {
                    'dish_id': this.dish.id, 
                    'varient_id': this.selected_varient.id,
                    'varient_price': this.selected_varient.price
                }
            );

            this.myshow = false;
        }
    },

    watch: {
        show: function(value){
            this.myshow = value;
        },
        myshow: function(value) {
            if(value == false) this.$emit('hide_varients');
            if(value == true) this.selected_varient = this.dish.varients[0];
        }
    }
}
</script>
