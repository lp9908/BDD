<?php
  function listar_salas_peliculas(){
    include "conexion_servidor.php";
	$peli = $_POST["nombreP"];
    $tables = "<option value=''> Selecciona sala</option>";
    $sql = "SELECT DISTINCT s.idSala, s.proyeccion FROM sala s, salapelicula sp WHERE sp.idpelicula = '$peli' AND s.idSala = sp.idSala";
    foreach ($conn->query($sql) as $row){
		$tables .= "<option value='$row[0]'>Sala ".$row[0]." - ".$row[1]."</option>";
    }
    echo $tables;
    $conn = null;
  }
  listar_salas_peliculas();
?>
