<?php
include('conn.php');
// header("Content-type: text/html; charset=utf-8");
$type = $_REQUEST['news_type'];
if ($type == "推荐") {
	$mysqlquery = mysql_query("select * from news ORDER BY id DESC");
	while($row = mysql_fetch_array($mysqlquery) ){
		$rows[]=$row;
	}
}else{
	$mysqlquery = mysql_query("select * from news where news_type = '$type' ORDER BY id DESC");
	while($row = mysql_fetch_array($mysqlquery) ){
		$rows[]=$row;
	}

};
die(json_encode($rows));
?>