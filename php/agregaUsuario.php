<?php
	include 'conec.php';
	$idUsuario = $_POST["idUsuario"];
	$tipoUsuario = $_POST["tipoUsuario"];
	$passwordUsuario = $_POST["passwordUsuario"];
	$nombreUsuario = $_POST["nombreUsuario"];
	$apUsuario = $_POST["apPaternoUsuario"];
	$amUsuario = $_POST["apMaternoUsuario"];
	$emailUsuario = $_POST["emailUsuario"];
	$estado = 1;
	try{
		$sql = "INSERT INTO usuario VALUES($idUsuario,'$tipoUsuario','$passwordUsuario','$nombreUsuario', '$apUsuario','$amUsuario','$estado','$emailUsuario')";
		$conn->exec($sql);
		echo("Usuario registrado");
	}
	catch(PDOException $e){
		echo($sql."<br>".$e->getMessage());
	}
	$conn = null;
?>
