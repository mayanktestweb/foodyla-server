<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta v-model="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add Dish</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>   
<script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
</head>
<body>
    <div class="main" id="app">
            <input type="text" v-model="name" placeholder="Name"><br>
            <input type="text" v-model="menu_id" placeholder="Menu Id"><br>
            <input type="text" v-model="type" placeholder="Type"><br>
            <input type="text" v-model="image" placeholder="Image"><br>
            <input type="text" v-model="isBestSeller" placeholder="Is best seller"><br>
            <br>
            <div>
                <h2>Add Varient : Total Varients @{{varients.length}}</h2>
                <input type="text" v-model="label" placeholder="Label"><br><br>
                <input type="text" v-model="price" placeholder="Price"><br><br>
                <input type="text" v-model="restaurant_rate" placeholder="Restaurant Rate"><br><br>
                <button @click="addVarient()">Add Varient</button>
            </div>
            <input type="submit" value="submit" @click="addDish()">
    </div>


<script>
    //const axios = require('axios');
    var app = new Vue({
        el: "#app",
        data: {
            name: '',
            menu_id: '',
            type: '',
            image: '',
            isBestSeller: null,
            varients: [],
            label: '',
            price: 0,
            restaurant_rate: 0
        },

        methods: {
            addVarient() {
                this.varients.push({'label': this.label, 'price': this.price, 
                    'restaurant_rate': this.restaurant_rate});
                this.label = ""; this.price = "";
            },

            addDish() {
                var url = window.location.href;
                axios.post(url, {
                    name: this.name, menu_id: this.menu_id, type: this.type, image: this.image,
                    isBestSeller: this.isBestSeller, varients: this.varients
                }).then(response => {
                    console.log(response.data);
                    if(response.status == '200') {
                        this.name = '';
                        this.menu_id = '';
                        this.type = '';
                        this.isBestSeller = null;
                        this.label = '';
                        this.price = 0;
                        this.varients = [];
                        this.restaurant_rate = 0;
                    }
                });
            }
        }
    });    
</script>

</body>
</html>