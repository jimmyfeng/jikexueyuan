<?php
include('conn.php');
$id = $_GET['id'];
$mysqlquery = mysql_query("select * from news where id = '$id'");
while($row = mysql_fetch_array($mysqlquery) ){
	$rows[]=$row;
}
die(json_encode($rows));
?>