<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register Delivery Man</title>
</head>
<body>
    <div class="main">
        <form action="" method="post">
            @csrf
            <input type="text" name="name" placeholder="Name" require><br><br>
            <input type="text" name="mobile_number" placeholder="Mobile Number" require><br><br>
            <input type="text" name="address" placeholder="Address" require><br><br>
            <input type="text" name="govt_id" placeholder="Govt Id" require><br><br>
            <input type="password" name="password" placeholder="Password" require><br><br>
            <input type="submit" name="submit" value="Submit">
        </form>
    </div>
</body>
</html>