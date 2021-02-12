<?php
if(isset($_POST["confirm"])){
    $email = $_POST["email"];

    require_once 'config.php';
    require_once 'functions.php';

    if (emptyForm($email)){
        header("location: ../pages/contact.html?error=emptyform");
        exit();
    }
    //Checks if the email is typed wrong
    if (invalidEmail($email)){
        header("location: ../pages/contact.html?error=invalidEmail");
        exit();
    }
    //Checks if the email is already taken
    if (emailExists($db, $email)){
        header("location: ../pages/contact.html?error=emailTaken");
        exit();
    } 
    //subscribes the user
    else{
        subscribe($db, $email);
        header("location: ../index.html");
        exit();
    }
} 
else {
    header("location: ../pages/contact.html");
    exit();
}