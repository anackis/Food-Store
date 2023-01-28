<?php 
$_POST = json_decode(file_get_contents("php://input"), true);
/// Alow you to get json files and work with them 
echo var_dump($_POST);
/// Translate data that we got to string and show on client 