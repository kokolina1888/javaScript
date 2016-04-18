<?php include('database.php');?>
<?php 
//create select query
$query  = 'SELECT * FROM shouts ORDER BY shout_id DESC';
$shouts = mysqli_query($conn, $query);

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jsshout Box</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

	<script type="text/javascript" src="js/script.js"></script>
</head>
<body>
	<div id="container">
		<header>
			<h1>
				ShoutBox
			</h1>
		</header>
		<div id="shouts">
			<ul>
			<?php 
while ($row = mysqli_fetch_assoc($shouts)) : ?>
				<li> <?php echo $row['name'].': '.$row['shout'].' ['.$row['date'].']'; ?></li>

			<?php endwhile; ?>
			</ul>
		</div>
		<footer>
			<form>
				<label for="name">Name: </label>
				<input type="text" id="name" name="name">
				<label for="shout">ShoutText: </label>
				<input type="text" id="shout" name="shout">
				<input type="hidden" name="date" value="2">
				<input type="submit" id="submit" value="SHOUT">
			</form>
		</footer>
	</div>
	
</body>
</html>
