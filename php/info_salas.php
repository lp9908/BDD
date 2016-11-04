<?php
	include "conexion_servidor.php";
	$fecha = $_POST["fecha"];
	$sql = "SELECT idSala, proyeccion FROM sala";
	
	echo "<div class='row'>";
    foreach ($conn->query($sql) as $row){
		$cabecera = "
			<div class=col-md-2'>
				<div class='table'>
					<table class='table'>
						<thead>
							<tr>
								<th>Sala $row[0]: $row[1]</th>
							</tr>
							<tr>
								<th>Nombre de la pelicula</th>
								<th>Idioma</th>
								<th>Hora de la funcion</th>
								<th>Duracion de la pelicula</th>
							</tr>
						</thead>
						<tbody>";
		$pie = "		</tbody>
					</table>
				</div>
			</div>";
		$tuplas="";
		$sql1 = "SELECT p.nombre, f.idioma, f.hora, p.duracion FROM pelicula p, funcion f WHERE p.idpelicula = f.idpelicula AND f.idsala = '$row[0]' AND f.fecha = '$fecha'";
		foreach ($conn->query($sql1) as $row){
			$tuplas.="		<tr>
								<td>$row[0]</td>
								<td>$row[1]</td>
								<td>$row[2]</td>
								<td>$row[3]</td>
							</tr>";
		}
		echo $cabecera.$tuplas.$pie;
		
    }
	echo "</div>";
	$conn = null;
?>