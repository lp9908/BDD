<?php
	include 'conec.php';
	$id = $_POST["IDPaqPtoVA"];
	$consulta = "SELECT nombre, precio FROM paquete WHERE idPaquete=$id;";
	try {
		$stmt = $conn->prepare($consulta);
	}catch(PDOException $e) {}
	try{
		$stmt->execute();
		$tuplas ="";
		while($datos = $stmt->fetch(PDO::FETCH_BOTH)){
			$tuplas.=$datos[0]."%".$datos[1];
		}
		echo $tuplas;
	}catch(PDOException $e) {
		echo "No hay paquetes en existencia";
	}
?>
