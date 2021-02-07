<?php
//Configuration
$serverName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "phpspotify";
$db = mysqli_connect($serverName, $dbUsername, $dbPassword, $dbName) or die("Connection failed: " . mysqli_connect_error());
