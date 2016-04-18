<?php 
include('database.php');

if(isset($_POST['name']) && isset($_POST['shout'])){
	$name = $_POST['name'];
	$shout = $_POST['shout'];	
    $date = $_POST['date'];

	//set time zone

	date_default_timezone_set('Europe/Sofia');
	$date = date('h:i:s a', time());


	$insert_query = "INSERT INTO shouts (name, shout, date)
	VALUES ('$name', '$shout', '$date')";

							//check for errors
	$insert_result= mysqli_query($conn, $insert_query);
	

	if($insert_result){
		echo '<li>'.$name.', '.$shout.', ['.$date.']</li>';
	}
}
	


