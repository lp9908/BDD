<?php
	function agregar_funcion(){
		include "conexion_servidor.php";
		$peli = $_POST["nombreP"];
		$sala = $_POST["nombreS"];
		$fech = $_POST["nombreF"];
		$hora = $_POST["nombreH"];
		$horaF = $hora.":00";
		$sql = "DELETE FROM funcion WHERE `idPelicula` = '$peli' AND `idSala` = '$sala' AND `fecha` = '$fech' AND `hora` = '$hora'";
		$conn->query($sql);
		$conn = null;
	}
	agregar_funcion();
?>


