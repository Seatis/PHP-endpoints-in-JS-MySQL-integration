<?php
include("mysql_conn.php");

foreach($_GET as $key => $value) {
	$$key=$value;
}

?>