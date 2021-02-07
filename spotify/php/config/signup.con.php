<?php

if(isset($_POST["signup"])){
    $email = $_POST["email"];
    $email2 = $_POST["email2"];
    $password = $_POST["password"];
    $userName = $_POST["username"];

    require_once 'db.con.php';
    require_once 'functions.con.php';

    //If all the fields are not filled, sends the user to "emptyform" page
    if (signupFormEmpty($email, $email2, $password, $userName)){
        header("location: ../signup.html?error=emptyform");
        exit();
    }
    //If user typed different emails, sends him/her to "emailsdonotmatch" page
    if (difEmails($email, $email2)){
        header("location: ../signup.html?error=emailsdonotmatch");
        exit();
    }
    //If the users type invalid character, sends him/her to "invalidName" page
    if (invalidName($userName)){
        header("location: ../signup.html?error=invaldName");
        exit();
    }
    //If the email is typed wrong, send the user to "invalidEmail" page
    if (invalidEmail($email)){
        header("location: ../signup.html?error=invaldEmail");
        exit();
    }
    //If the username is already taken by someone else, sends the user to "usernameTaken" page
    if (userExists($db, $userName)){
        header("location: ../signup.html?error=usernameTaken");
        exit();
    } 
    //If the email is already taken, sends the user to "emailTaken" page
    if (emailExists($db, $email)){
        header("location: ../signup.html?error=emailTaken");
        exit();
    } 
    //registers the user, and send him/her to login page
    else{
        register($db, $email, $password, $userName);
        header("location: ../login.html");
    }
} 
else {
    header("location: ../signup.html");
    exit();
}
    
