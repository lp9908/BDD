<?php
	include 'conec.php';
	$idUsuario = $_POST["idUs"];
	$consulta = "UPDATE usuario SET estado = 0 WHERE idUsuario = $idUsuario";
	try{
		$stmt = $conn->prepare($consulta);
		$stmt->execute();
		echo  "Usuario eliminado";
		$conn = null;
	}catch(PDOException $e){
		echo "Error: ".$e->getMessage();
	}
?>
