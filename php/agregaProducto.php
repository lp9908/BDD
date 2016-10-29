<?php
	include 'conec.php';
	$idProducto = $_POST["idProducto"];
	$nombreProducto = $_POST["nombreProducto"];
	$Precio = $_POST["Precio"];
	$existencia = $_POST["existencia"];
	$estado = 1;
	try {
    	$sql = "INSERT INTO producto VALUES ($idProducto,'$nombreProducto', $Precio,$existencia, $estado)";
    	$conn->exec($sql);
    	echo "Producto agregado";
    }
	catch(PDOException $e){
    	echo $sql . "<br>" . $e->getMessage();
    }
	$conn = null;
?>