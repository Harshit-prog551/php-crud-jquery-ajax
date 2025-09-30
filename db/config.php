<?php

$conn = new mysqli("localhost","root","","user",3307);

if($conn->connect_error){
    die("conncetion failed: ".$conn->connect_error);
}

?>