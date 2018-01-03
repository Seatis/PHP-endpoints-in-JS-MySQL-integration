<?php
include("mysql_conn.php");

foreach($_GET as $key => $value) {
	$$key=$value;
}

if (isset($color)) {
  $sql="SELECT * FROM licence_plates WHERE color=$color";
} elseif (isset($brand)) {
  $sql="SELECT * FROM licence_plates WHERE car_brand=$brand";
} else {
  $sql="SELECT * FROM licence_plates";
}

$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
  $rows[] = $row;
}

echo json_encode($rows);

mysqli_close($conn);
?>