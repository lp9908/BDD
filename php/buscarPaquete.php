<?php
	include 'conec.php';
	$campo = $_POST["campoPaq"];
	$estado = $_POST["estadoPaq"];
	$valor = $_POST["valor"];
	$tipoBusqueda = $_POST["tipoBusquedaPaq"];
	$consulta = "";
	$cabecera = "
	<div class='table-responsive'>
		<table class='table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Estado</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>";

    $pie = "</tbody>
		</table>
	</div>";
	if($valor == 10){
		try{
			$consulta .= "SELECT * FROM paquete";
			$stmt = $conn->prepare($consulta);
		}
		catch(PDOException $e) {
		  echo "Error: " . $e->getMessage();
		}
	}else{
		try{
			if($estado == 3 && $campo == ""){
				$consulta .= "SELECT * FROM paquete WHERE idPaquete LIKE '%$campo%' OR nombre LIKE '%$campo%' OR precio LIKE '%$campo%' OR estado LIKE '%$campo%'";
			}else{
				if($estado == 0 && $campo == ""){
					$consulta .= "SELECT * FROM paquete WHERE estado LIKE '$estado'";
				}
				if($estado == 1 && $campo == ""){
					$consulta .= "SELECT * FROM paquete WHERE estado LIKE '$estado'";
				}
				if(($estado == 0 || $estado == 1 || $estado == 3) && $campo != ""){
					if($estado == 3){
						$consulta .= "SELECT * FROM paquete WHERE (estado LIKE '1' OR estado LIKE '0')";
					}
					else{
						$consulta .= "SELECT * FROM paquete WHERE estado LIKE '$estado'";
					}
					switch ($tipoBusqueda) {
						case 1:
							$consulta .= " AND idPaquete = $campo";
							break;
						case 2:
							$consulta .= " AND nombre like '%$campo%'";
							break;
						case 3:
							$consulta .= " AND precio like '%$campo%'";
							break;
						default:
							$consulta .= " AND	(idPaquete LIKE '%$campo%' OR nombre LIKE '%$campo%' OR precio LIKE '%$campo%')";
							break;
					}
				}
			}
			$stmt = $conn->prepare($consulta);
		}catch(PDOException $e) {}
	}
	try{
		$stmt->execute();
		$tuplas ="";
		while($datos = $stmt->fetch(PDO::FETCH_BOTH)){
			$tuplas.="	<tr>
							<td>".$datos[0]."</td>
							<td>".$datos[1]."</td>
							<td>".$datos[2]."</td>
							<td>".$datos[3]."</td>
							<td>"."<button id='eliminaPaqueteBtn' name='eliminaPaqueteBtn' value='$datos[0]'>Eliminar</button>"."</td>
							<td>"."<button id='modificaPaqueteBtn' name='modificaPaqueteBtn' value='$datos[0]'>Modificar</button>"."</td>
						</tr>";
		}
		echo $cabecera.$tuplas.$pie;
	}catch(PDOException $e) {
		echo "No hay registro";
	}
?>
