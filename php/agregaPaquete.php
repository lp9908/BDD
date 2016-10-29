<?php
	include 'conec.php';
	$idPaquete = $_POST["idPaquete"];
	$nombrePaquete = $_POST["nombrePaquete"];
	$Precio = $_POST["Precio"];
	$estado = 1
	try {
    	$sql = "INSERT INTO paquete VALUES ($idPaquete,'$nombrePaquete',$Precio,$estado)";
    	$conn->exec($sql);
    	echo "Paquete agregado";
    }
	catch(PDOException $e){
    	echo $sql . "<br>" . $e->getMessage();
    }
	$conn = null;
?>