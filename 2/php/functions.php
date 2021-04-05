<?php

require_once 'config.php';

function register($db, $name, $score){
    $new_user = "INSERT INTO users (usersName, usersScore) VALUES ('$name', '$score');";
    mysqli_query($db, $new_user);
}