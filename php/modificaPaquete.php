<?php
	include 'conec.php';
	$idPaquete = $_POST["id"];
	$nombre = $_POST["nombre"];
	$precio = $_POST["precio"];
	$consulta = "UPDATE paquete SET nombre = '$nombre', precio = '$precio' WHERE idPaquete = $idPaquete";
	try{
		$stmt = $conn->prepare($consulta);
		$stmt->execute();
		echo  "Paquete modificado";
		$conn = null;
	}catch(PDOException $e){
		echo "Erro: ".$e->getMessage();
	}
?>