<?php
	include 'conec.php';
	$idP = $_POST["IDProdDBAPaq"];
	$consulta = "SELECT nombre FROM producto WHERE idProducto=$idP;";
	try {
		$stmt = $conn->prepare($consulta);
	}
	catch(PDOException $e) {}
	try{
		$stmt->execute();
		$tuplas ="";
		while($datos = $stmt->fetch(PDO::FETCH_BOTH)){
			$tuplas.=$datos[0];
		}
		echo $tuplas;
	}catch(PDOException $e) {
		echo "No hay producto en existencia";
	}
?>
