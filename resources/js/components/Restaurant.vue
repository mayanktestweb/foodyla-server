<template>
    <div @click="loadRestaurantPage(restaurant.id)">
        <div class="flex-container">
            <div class="img">
                <img :src="restaurant.image" :alt="restaurant.name" :style="{filter: imageFilter}">
            </div>
            <div class="data">
                <div class="data-container">
                    <div class="name font-weight-bold">{{restaurant.name}}</div>
                    <div class="description font-weight-regular">{{restaurant.description}}</div>
                    <div v-if="this.restaurant.isOpen" class="font-weight-medium green--text text--darken-3" style="font-size: 0.8em">{{restaurant.offer}}</div>
                    <div v-else class="font-weight-medium red--text text--darken-3" style="font-size: 0.8em">{{restaurant.close_note}}</div>
                    <div class="rating font-weight-medium">{{restaurant.rating}} <v-icon color="amber darken-2" size="14">star</v-icon></div>
                </div>
            </div>
        </div>
        <div class="hr"></div>
    </div>
</template>

<script>
export default {
    props: ['restaurant'],
    computed: {
        imageFilter: function() {
            if(this.restaurant.isOpen) return 'none';
            else return 'grayscale(100%)';
        }
    },

    methods: {
        loadRestaurantPage: function() {
            this.$router.push("/restaurants/"+this.restaurant.id+"/page");
        }
    }
}
</script>


<style lang="scss" scoped>
div.flex-container {
    display: flex;
    background: white;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.hr {
    margin-left: 5px;
    margin-right: 5px;
    min-height: 1px;
    background: rgb(233, 228, 228);
}

div.img {
    width: 35%;
    min-width: 35%;
    flex-shrink: 0;
}

div.img img {
    width: 100%;
    height: 100%;
    min-height: 19px;
    border-radius: 5px;
}

div.data {
    flex-grow: 1;
    padding-left: 5px;
    padding-bottom: 0px;
}

div.data-container {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
}


div.name {
    font-size: 1.1em;
}

div.description {
    font-size: 0.8em;
    color: darkgray;
}

div.rating {
    font-size: 0.7em;
    color: black;
    justify-self: end;
}
</style>
