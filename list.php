<?php

include("db/config.php");

$res = $conn->prepare("select * from users");
$res->execute();

$result = $res->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);  //data in assoc array

echo json_encode($data);




?>