<?php
        include 'conexion_BD.php';
        $disA = $_POST['disA'];
        $pelicula = $_POST['pelicula'];
        $sala = $_POST['sala'];
        $idioma = $_POST['idioma'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
        $DisAsi ="";

        try{

          $stmt = $conn->prepare("UPDATE funcion SET disAsientos ='$disA'
                                    WHERE idsala = $sala
                                    AND idpelicula = $pelicula
                                    AND fecha = '$fecha'
                                    AND hora = '$hora'
                                    AND idioma = '$idioma'");
            $stmt->execute();
            echo "Dato Actualizado";
            }
        catch (PDOException $e){
            echo $e->getMessage();
          //  echo "No se realizó la actualización";
        }
?>
