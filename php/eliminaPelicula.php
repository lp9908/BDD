<?php
	include 'conec.php';
	$id = $_POST["id"];
	$consulta = "UPDATE pelicula SET estado = 0 WHERE idPelicula = $id";
	try{
		$stmt = $conn->prepare($consulta);
		$stmt->execute();
		echo  "Pelicula eliminada";
		$conn = null;
	}catch(PDOException $e){
		echo "Error: ".$e->getMessage();
	}
?>
