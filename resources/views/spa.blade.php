<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app"></div>

<script>
	function xxx(val) {
		app.__vue__.$store.state.android_data = val;
		console.log(app.__vue__);
	}
</script>
<script src="/js/app.js"></script>
</body>
</html>