<?php
	function asignar_sala_pelicula(){
		include "conexion_servidor.php";
		$peli = $_POST["nombreP"];
		$sala = $_POST["nombreS"];
		$idio = $_POST["nombreI"];
		$sql = "INSERT INTO salapelicula VALUES($peli, $sala, '$idio')";
		$conn->query($sql);
		$conn = null;
	}
	asignar_sala_pelicula();
?>


