<?php

include('../db/config.php');

$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);

$id = $mydata['id'];

if(!empty($id)){
    $sql = "delete from users where id = {$id}";

    if($conn->query($sql)){ 
        echo "User data deleted";
    }else{
        echo "Unable to delete";
    }
}

?>