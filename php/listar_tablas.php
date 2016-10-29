<?php
  function listar_tablas(){
    include "conexion_servidor.php";
    $tables = "<option value=''> Selecciona tabla </option>";
	$conn->query("USE $dbname");
    $sql = "SHOW TABLES";
    foreach ($conn->query($sql) as $row){
        $tables .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    echo $tables;
    $conn = null;
  }
  listar_tablas();
?>
