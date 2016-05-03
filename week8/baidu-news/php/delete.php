<?php
include('conn.php');
$id = $_GET['id'];
$sql = mysql_query("DELETE FROM news WHERE id='$id'");
mysql_query($sql);
echo "<script type='text/javascript'>alert('删除成功');</script>";
header("refresh:0;url=../guanli.html");
?>