<?php
  function tipo_atributo(){
    include "conexion_servidor.php";
    $table = $_POST["table"];
    $attr = $_POST["attr"];
	$tipo_attr = "";
	$conn->query("USE $dbname");
    $sql = "DESC $table";
    foreach ($conn->query($sql) as $row){
		if($row[0] == $attr){
			$tipo_attr = $row[1];
		}
    }
    echo $tipo_attr;
    $conn = null;
  }

  tipo_atributo();
?>
