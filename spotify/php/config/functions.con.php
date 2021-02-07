<?php

require_once 'db.con.php';

//signup functions

//Checks if users filled all the given fields
function signupFormEmpty($str1, $str2, $str3, $str4){
    $result = false;
    if(empty($str1) || empty($str2) || empty($str3) || empty($str4)){
        $result = true;
    } 
    return $result;
}
//Checks if users typed same email each time
function difEmails($str1, $str2){
    $result = false;
    if($str1 !== $str2){
        $result = true;
    }
    return $result;
}
//Checks if users typed any invalid characters
function invalidName($str){
    $result = true;
    if (preg_match(("/^[a-zA-Z0-9]*$/"), $str)){
        $result = false;
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
//Checks if the user exists in the database
function userExists($db, $str){
    $result = false;
    $new_user = "SELECT * FROM users WHERE usersUid = '$str';";
    $results = mysqli_query($db, $new_user);
    if(mysqli_fetch_assoc($results)){
        $result = true;
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
//Registers the new user in the database
function register($db, $email, $password, $userName){
    $hashedPass = password_hash($password, PASSWORD_DEFAULT);
    $new_user = "INSERT INTO users (usersEmail, usersUid, usersPass) VALUES ('$email', '$userName', '$hashedPass');";
    mysqli_query($db, $new_user);
}
//Login functions

//Checks if user filled all the given fields
function loginFormEmpty($str1, $str2){
    $result = false;
    if(empty($str1) || empty($str2)){
        $result = true;
    } 
    return $result;
}
//Fetches the data from the database for the given user
function fetchData($db, $userName){
    $stmt = $db->prepare("SELECT * FROM users WHERE usersUid = ?");
    $stmt->bind_param("s", $userName);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();
    return $user;
}

   