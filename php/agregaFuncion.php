<?php
	function agregar_funcion(){
		include "conexion_servidor.php";
		$peli = $_POST["nombreP"];
		$sala = $_POST["nombreS"];
		$idio = $_POST["nombreI"];
		$fech = $_POST["nombreF"];
		$hora = $_POST["nombreH"];
		$horaF = $hora.":00";
		$sql = "INSERT INTO funcion VALUES($peli, $sala, '$idio', '$fech', '$horaF', '0000000000000000000000000', '1')";
		$conn->query($sql);
		$conn = null;
	}
	agregar_funcion();
?>


