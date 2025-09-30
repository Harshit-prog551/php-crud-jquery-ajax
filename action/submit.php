<?php

include('../db/config.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);

$id = $mydata['id'];
$name = $mydata['name'];
$email = $mydata['email'];
$age = $mydata['age'];
$gender = $mydata['gender'];




if(!empty($name) && !empty($email) && !empty($age) && !empty($gender) && $gender != "Select gender"){
    $sql = "INSERT INTO users(id,name,email,age,gender) VALUES
    ('$id','$name','$email','$age','$gender') on duplicate key update name='$name', email='$email', age='$age',gender='$gender'";

    if($conn->query($sql)){
        echo "User data saved successfully";
    }else{
        echo "Unable to save data";
    }
}else{
    echo "Fill all fields";
}
?>
