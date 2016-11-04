<?php
  function listar_salas(){
    include "conexion_servidor.php";
    $tables = "<option value=''> Selecciona sala</option>";
    $sql = "SELECT idSala, proyeccion FROM sala;";
    foreach ($conn->query($sql) as $row){
		$tables .= "<option value='$row[0]'>Sala ".$row[0]." - ".$row[1]."</option>";
    }
    echo $tables;
    $conn = null;
  }
  listar_salas();
?>
