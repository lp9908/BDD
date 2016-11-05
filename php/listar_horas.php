<?php
	function listar_idiomas(){
		include "conexion_servidor.php";
		$peli = $_POST["nombreP"];
		$sala = $_POST["nombreS"];
		$fech = $_POST["nombreF"];
		$tables = "<option value=''> Selecciona funcion</option>";
		$sql = "SELECT hora FROM funcion WHERE idpelicula = $peli AND idsala = $sala AND fecha = '$fech'";
		echo $sql;
		foreach ($conn->query($sql) as $row){
			$tables .= "<option value='$row[0]'>".$row[0]."</option>";
		}
		echo $tables;
		$conn = null;
	}
	listar_idiomas();
?>


