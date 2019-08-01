<template>
    <div class="maini">
        <div class="functional">
            <div class="remove" v-ripple @click="remove"><v-icon dark small>remove</v-icon></div>
            <div class="count"><span class="font-weight-medium">{{varient.count}}</span></div>
            <div class="add" v-ripple @click="add"><v-icon dark small>add</v-icon></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['varient'],

    methods: {
        add: function() {
            var dish = {dish_id: this.varient.dish_id, varient_id: this.varient.varient_id, varient_price: this.varient.price};
            console.log(dish);
            this.$store.dispatch('addDish', dish);
        },

        remove: function() {
            this.$store.dispatch('removeDishVarient', this.varient.varient_id);
        }
    }
}
</script>

<style scoped>

div.maini {
    height: 100%;
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