<?php
	include 'conec.php';
	$idProducto = $_POST["id"];
	$consulta = "UPDATE producto SET estado = 0 WHERE idProducto = $idProducto";
	try{
		$stmt = $conn->prepare($consulta);
		$stmt->execute();
		echo  "Producto eliminado";
		$conn = null;
	}catch(PDOException $e){
		echo "Error: ".$e->getMessage();
	}
?>