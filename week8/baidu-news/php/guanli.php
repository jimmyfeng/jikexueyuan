<?php
include('conn.php');
$mysqlquery = mysql_query("select * from news");
while($row = mysql_fetch_array($mysqlquery) ){
	$rows[]=$row;
}
die(json_encode($rows));
?>