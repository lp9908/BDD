<?php
  function listar_atributos(){
    include "conexion_servidor.php";
    $table = $_POST["table"];
	
	$cabecera = "
	<div class='table-responsive'>
		<table class='table'>
			<thead>
				<tr>
					<th>Field</th>
					<th>Type</th>
					<th>Null</th> 
					<th>Key</th>
					<th>Default</th>
					<th>Extra</th>
				</tr>
			</thead>
			<tbody>";

    $pie = "</tbody>
		</table>
	</div>";
    $tuplas = "";
	$conn->query("USE $dbname");
    $sql = "DESC $table";
    foreach ($conn->query($sql) as $row){
		$tuplas.="
					<td>".$row[0]."</td>
					<td>".$row[1]."</td>
					<td>".$row[2]."</td>
					<td>".$row[3]."</td>
					<td>".$row[4]."</td>
					<td>".$row[5]."</td>
				</tr>";
    }
    echo $cabecera.$tuplas.$pie;
    $conn = null;
  }

  listar_atributos();
?>
