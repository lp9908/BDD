<?php
	function listar_idiomas(){
		include "conexion_servidor.php";
		$peli = $_POST["nombreP"];
		$sala = $_POST["nombreS"];
		$tables = "<option value=''> Selecciona idioma</option>";
		$sql = "SELECT idioma FROM salapelicula WHERE idPelicula = $peli AND idSala = $sala";
		echo $sql;
		foreach ($conn->query($sql) as $row){
			$tables .= "<option value='$row[0]'>".$row[0]."</option>";
		}
		echo $tables;
		$conn = null;
		//echo "Hola";
	}
	listar_idiomas();
?>


