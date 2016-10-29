<?php
	include 'conec.php';
	$idEmpleado = $_POST["idEmpleado"];
	$tipoEmpleado = $_POST["tipoEmpleado"];
	$nombreEmpleado = $_POST["nombreEmpleado"];
	$apEmpleado = $_POST["apEmpleado"];
	$amEmpleado = $_POST["amEmpleado"];
	$emailEmpleado = $_POST["emailEmpleado"];
	$passwordEmpleado = $_POST["passwordEmpleado"];
	$estado = 1;
	try{
    	$sql = "INSERT INTO empleado VALUES ($idEmpleado,'$tipoEmpleado', $estado, '$nombreEmpleado','$apEmpleado', '$amEmpleado', '$emailEmpleado', '$passwordEmpleado')";
    	$conn->exec($sql);
    	echo "Empleado agregado";
    }catch(PDOException $e){
    	echo $sql . "<br>" . $e->getMessage();
    }
	$conn = null;
?>
