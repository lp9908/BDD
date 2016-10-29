<?php
  function listar_atributos(){
    include "conexion_servidor.php";
    $table = $_POST["table"];
    $table_attrs = "<option value=''> Selecciona atributo </option>";
	$conn->query("USE $dbname");
    $sql = "DESC $table";
    foreach ($conn->query($sql) as $row){
        $table_attrs .= "<option value='$row[0]'>".$row[0]."</option>";
    }
    echo $table_attrs;
    $conn = null;
  }

  listar_atributos();
?>
