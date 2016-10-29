<?php
	include 'conec.php';
	$campo = $_POST["campoProdPtoVA"];
	$valor = $_POST["valorProdPtoVA"];
	$consulta = "";
	$cabecera = "
	<div class='table-responsive'>
		<table class='table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Existencias</th>
					<th>Agregar</th>
				</tr>
			</thead>
			<tbody>";

    $pie = "</tbody>
		</table>
	</div>";
	if($valor == 10){
		try{
			$consulta .= "SELECT idProducto,nombre, precioUnitario,existencias FROM producto where estado='1' order by nombre";
			$stmt = $conn->prepare($consulta);
		}
		catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
	}else{
		try {
			$consulta .= "SELECT idProducto,nombre, precioUnitario,existencias FROM producto WHERE nombre LIKE '%$campo%' and estado='1' order by nombre";
			$stmt = $conn->prepare($consulta);
		}
		catch(PDOException $e) {}
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
							<td>"."<button class='btn btn-primary' type='button' id='AgregarProductoBtnPtoVA' name='AgregarProductoBtnPtoVA'  onclick='agregaProductoIDPtoVA("."$datos[0]".")'>Agregar</button>"."</td>
						</tr>";
		}
		echo $cabecera.$tuplas.$pie;
	}catch(PDOException $e) {
		echo "No hay productos en existencia";
	}
?>
