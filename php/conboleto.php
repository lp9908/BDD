<?php
	include 'conec.php';
	try{
		$sqla = "SELECT COUNT(*) FROM ticketalimentos";
		$stmt = $conn->prepare($sqla);
		$stmt->execute();
		$resultados = $stmt->fetch(PDO::FETCH_BOTH);
		$id = $resultados[0];
		$id++;
		echo "<input type=´'text' class='form-control' id='auxtiketInput' name='auxtiketInput' placeholder='' value=".$id.">";
	} catch (PDOException $e){}
	$conn = null;
?>