<?php
	include 'conexion_BD.php';
	$valor = $_POST["valorCliPtoVB"];
	$consulta = "";
	try{
		$consulta .= "SELECT email,tipoUsuario FROM usuario where idUsuario= $valor";
		$stmt = $conn->prepare($consulta);
	}catch(PDOException $e) {}
	try{
		$stmt->execute();
		$mensaje ="";
		while($datos = $stmt->fetch(PDO::FETCH_BOTH)){
			if($datos[1]=="Golden"){
				$mensaje = $datos[0]."?".$datos[1]."% 40";
			}
			else if($datos[1]=="Black"){
				$mensaje = $datos[0]."?".$datos[1]."% 35";
			}
			else if($datos[1]=="Silver"){
				$mensaje = $datos[0]."?".$datos[1]."% 30";
			}
			else if($datos[1]=="Super Fan"){
				$mensaje = $datos[0]."?".$datos[1]."% 25";
			}
			else if($datos[1]=="Fan Club"){
				$mensaje = $datos[0]."?".$datos[1]."% 20";
			}
			else if($datos[1]=="Fan"){
				$mensaje = $datos[0]."?".$datos[1]."% 15";
			}
			else if($datos[1]=="Cine Club"){
				$mensaje = $datos[0]."?".$datos[1]."% 10";
			}
			echo $mensaje;
		}
	}catch(PDOException $e) {}
?>
