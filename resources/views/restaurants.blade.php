<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Restaurants</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        div.main {
            background: lightgrey;
            min-height: 100%;
        }
        div.restaurant {
            display: flex;
            padding: 10px;
            flex-flow: row;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid grey;
            background: white;
        }
        div.name {
            font-size: 2em;
            font-family: Arial, Helvetica, sans-serif;
            color: #333;
        }
        div.spacer {
            flex-grow: 1;
        }
        div.action {
            display: flex;
            justify-content: center;
        }
        div.action a{
            text-decoration: none;
            padding: 10px;
            background: dodgerblue;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;            
        }

        div.action a:hover {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="main">
        @foreach($restaurants as $restaurant)
            <div class="restaurant">
                <div class="name">{{$restaurant->name}}</div>
                <div class="spacer"></div>
                <div class="action">
                    <a href="/restaurants/{{$restaurant->id}}/dishes/add" class="add">Add Dish</a>
                </div>
            </div>
        @endforeach
    </div>
</body>
</html>