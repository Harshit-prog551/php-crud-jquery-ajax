<?php

include('../db/config.php');

$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);

$id = $mydata['id'];


$res = $conn->prepare("select * from users where id = {$id}");
$res->execute();

$result = $res->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);  //data in assoc array

echo json_encode($data);


?>