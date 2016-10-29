<?php
	include 'conec.php';
	$idPaquete = $_POST["id"];
	$consulta = "UPDATE paquete SET estado = 0 WHERE idPaquete = $idPaquete";
	try{
		$stmt = $conn->prepare($consulta);
		$stmt->execute();
		echo  "Paquete eliminado";
		$conn = null;
	}catch(PDOException $e){
		echo "Error: ".$e->getMessage();
	}
?>
