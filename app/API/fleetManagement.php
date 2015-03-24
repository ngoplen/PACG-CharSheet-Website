<?php
$db_host = "localhost";
$db_data = "PACG";
$db_user = "root";
$db_pass = "mA08062005";

$db = new mysqli($db_host, $db_user, $db_pass, $db_data);

if($db->connect_errno > 0){
    die("Unable to connect to database [" . $db->connect_error . "]");
}

$attribute=mysql_real_escape_string($_REQUEST['attribute']);
$sql="SELECT f.active, c.name FROM tblFleet AS f LEFT JOIN tblCards AS c ON f.card_id=c.card_id WHERE f.player_character_id = 1 AND c.attributes = ?;";
$fleetStatement=$db->prepare($sql);
$fleetStatement->bind_param('s',$attribute);
$fleetStatement->execute();
$fleetStatement->bind_result($active, $name);
$fleet=array();
$x=0;
while ($fleetStatement->fetch()){
  $fleet[$x]['name']=$name;
  $fleet[$x++]['active']=$active;
}
print json_encode($fleet);
  
$db->close();
?>