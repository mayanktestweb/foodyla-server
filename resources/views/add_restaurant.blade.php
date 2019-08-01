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
        <input type="text" name="name" placeholder="Name"><br>
        <input type="text" name="description" placeholder="Description"><br>
        <input type="text" name="offer" placeholder="Offer"><br>
        <input type="text" name="rating" placeholder="rating"><br>
        <input type="text" name="image" placeholder="Image"><br>
        <input type="checkbox" name="isOpen" placeholder="Is Open"><br>
        <input type="text" name="close_note" placeholder="Close Note"><br>
        <input type="text" name="region" placeholder="Region"><br>
        <input type="text" name="latlong" placeholder="Lat Long"><br>
        <input type="text" name="mobile_number" placeholder="Mobile Number"><br>
        <input type="text" name="other_data" placeholder="Other Data"><br>
        <br>
        <input type="submit" name="submit" value="Add">
    </form>
</body>
</html>