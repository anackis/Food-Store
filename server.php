<?php 
$_POST = json_decode(file_get_contents("php://input"), true);
// Pozvaljajet poluchitj json dannije i porabotatj s nimi 
echo var_dump($_POST);
// prevrashjaet prishedshije dannije v stroku i pokazivaet na kliente 