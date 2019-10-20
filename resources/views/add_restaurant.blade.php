<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        @csrf
        <input type="text" v-model="name" placeholder="Name"><br>
        <input type="text" v-model="description" placeholder="Description"><br>
        <input type="text" v-model="offer" placeholder="Offer"><br>
        <input type="text" v-model="rating" placeholder="rating"><br>
        <input type="text" v-model="image" placeholder="Image"><br>
        <input type="checkbox" name="isOpen" placeholder="Is Open"><br>
        <input type="text" v-model="close_note" placeholder="Close Note"><br>
        <input type="text" v-model="region" placeholder="Region"><br>
        <input type="text" v-model="latlong" placeholder="Lat Long"><br>
        <input type="text" v-model="mobile_number" placeholder="Mobile Number"><br>
        <input type="text" v-model="other_data" placeholder="Other Data"><br>
        <br>
        <input type="submit" name="submit" value="Add">
    </form>
</body>
</html>