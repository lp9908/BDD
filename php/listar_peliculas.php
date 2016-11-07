<?php
  function listar_peliculas(){
    include "conexion_servidor.php";
    $tables = "<option value=''> Selecciona pelicula</option>";
    $sql = "SELECT idpelicula, nombre FROM pelicula WHERE estado = 1";
    foreach ($conn->query($sql) as $row){
		$tables .= "<option value='$row[0]'>".$row[1]."</option>";
    }
    echo $tables;
    $conn = null;
  }
  listar_peliculas();
?>