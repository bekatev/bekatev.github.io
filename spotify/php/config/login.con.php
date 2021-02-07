<?php

if(isset($_POST["login"])){
    $userName = $_POST["username"];
    $password = $_POST["password"];

    require_once 'db.con.php';
    require_once 'functions.con.php';

//If all the given fields were not filled sends the user to "emptyform" page
    if (loginFormEmpty($userName, $password)){
        header("location: ../login.php?error=emptyform");
        exit();
    }
//If the typed users does not exist sends the user to "nosuchuser" page
    if (!userExists($db, $userName)){
        header("location: ../login.php?error=nosuchuser");
        exit();
    }
    $user = fetchData($db, $userName);
    //If the typed username exists with the typed pass, sends the user to his/her profile
    if ($user && password_verify($password, $user["usersPass"])){
        header("location: ../profile.html");
    } 
    //If the password was not correct user is sent to "incorrectPassword" page
    else{
        header("location: ../login.php?error=incorrectPassword");
        exit();
    }
} else {
    header("location: ../signup.html");
}

