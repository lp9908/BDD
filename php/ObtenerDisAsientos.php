<?php
        include 'conexion_BD.php';
        $pelicula = $_POST['pelicula'];
        $sala = $_POST['sala'];
        $idioma = $_POST['idioma'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
        $DisAsi ="";

        try{
          $stmt = $conn->prepare("SELECT disAsientos FROM funcion
                                    WHERE idsala = $sala
                                    AND idpelicula = $pelicula
                                    AND fecha = '$fecha'
                                    AND hora = '$hora'
                                    AND idioma = '$idioma'");
            $stmt->execute();
            $datos = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach ($datos as $dato){
                    $DisAsi=$dato['disAsientos'];
                }
                  echo $DisAsi;
            }
        catch (PDOException $e){
          //  echo $e->getMessage();
            echo "1111111111111111111111";
        }
?>
