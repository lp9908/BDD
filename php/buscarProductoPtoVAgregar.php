<?php
	include 'conec.php';
	$idP = $_POST["IDProdPtoVA"];
	$consulta = "SELECT nombre, precioUnitario FROM producto WHERE idProducto=$idP;";
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
		echo "No hay producto en existencia";
	}
?>
