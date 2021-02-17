<?php
if(isset($_POST["confirm"])){
    $name = $_POST["name"];
    $score = $_POST["score"];

    require_once 'config.php';
    require_once 'functions.php';

    
    register($db, $name, $score);
    header("location: ../result.html");
    exit();

 
} 
else {
    header("location: ../index.html");
    exit();
}