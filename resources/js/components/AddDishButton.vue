<template>
    <div class="main" v-if="active">
        <div v-if="shouldShow" class="add_btn" v-ripple @click="add">
            <div class="font-weight-medium white--text">ADD</div>
        </div>
        <div v-else class="functional">
            <div class="remove" v-ripple @click="remove"><v-icon dark small>remove</v-icon></div>
            <div class="count"><span class="font-weight-medium">{{count}}</span></div>
            <div class="add" v-ripple @click="add"><v-icon dark small>add</v-icon></div>
        </div>
        <v-dialog v-model="remove_dialog" max-width="290">
            <v-card>
                <v-card-text>{{remove_dialog_message}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" @click="remove_dialog = false" flat>CANCEL</v-btn>
                    <v-btn color="green" flat to="/mobile/cart">VIEW CART</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['dish', 'restaurant_id'],
    data: function() {
        return {
            remove_dialog: false,
            remove_dialog_message: "You have added different variations of this item. Please visit " +
                                    "cart to remove them separately."
        }
    },
    computed: {
        shouldShow: function() {            
            if(this.count <= 0) return true;
            else return false;
        },
        count: function() {
            return this.dishInCart.length;
        },
        dishInCart: function() {
            return this.$store.getters.getDishInCartById(this.dish.id);
        },
        active: function() {
            return this.$store.getters.restaurantById(this.restaurant_id).isOpen;
        }
    },
    methods: {
        add: function() {
            if(this.dish.varients.length == 1) {
                this.$store.dispatch('setCartRestaurant', this.restaurant_id);
                this.$store.dispatch('addDish', 
                {
                    'dish_id': this.dish.id, 
                    'varient_id': this.dish.varients[0].id,
                    'varient_price': this.dish.varients[0].price
                });
            } else {
                this.$emit('show_varients', this.dish);
            }
        },
        remove: function() {
            var allVarientsAreSame = true;
            
            for(var i=0; i<this.dishInCart.length; i++) {
                if(this.dishInCart[i].varient_id == this.dishInCart[0].varient_id) allVarientsAreSame = true;
                else {
                    allVarientsAreSame = false;
                    break;
                }
            }

            if(allVarientsAreSame) {
                this.$store.dispatch('removeDish', this.dish.id);
            } else {
                this.remove_dialog = true;
            }
        }
    }
}
</script>

<style scoped>
div.add_btn {
    height: 28px;
    width: 88px;
    line-height: 28px;
    border-radius: 2px;
    font-size: 1em;
    display: flex;
    justify-content: center;
    background: #4caf50;
	box-shadow: 2px 2px 5px grey;
}

div.functional {
    display: flex;
    height: 28px;
    width: 88px;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 3px lightgrey;
    border: 1px solid #4caf50;
    border-radius: 2px;
}

div.remove {
    background: #4caf50;
    border-radius: 2px 0px 0px 2px;
    height: 100%;
    line-height: 28px;
    width: 30%;
    display: flex;
    justify-content: center;
}

div.count {
    background: white;
    height: 100%;
    width: 40%;
    text-align: center;
    line-height: 28px;
}

div.add {
    background: #4caf50;
    border-radius: 0px 2px 2px 0px;
    height: 100%;
    line-height: 28px;
    width: 30%;
    display: flex;
    justify-content: center;
}
</style>
