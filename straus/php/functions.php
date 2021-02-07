<?php

require_once 'config.php';

//Checks if users filled the given field
function emptyForm($str){
    $result = false;
    if(empty($str)){
        $result = true;
    } 
    return $result;
}

//Checks if users used standard email form
function invalidEmail($str){
    $result = true;
    if(filter_var($str, FILTER_VALIDATE_EMAIL)){
        $result = false;
    }
    return $result;
}
//Checks if the email exists in the database
function emailExists($db, $str){
    $result = false;
    $new_user = "SELECT * FROM users WHERE usersEmail = '$str';";
    $results = mysqli_query($db, $new_user);
    if(mysqli_fetch_assoc($results)){
        $result = true;
    }
    return $result;
}
//Subscribes the new user in the database
function subscribe($db, $email){
    $new_user = "INSERT INTO users (usersEmail) VALUES ('$email');";
    mysqli_query($db, $new_user);
}
