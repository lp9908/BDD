<?php
    function listarPeliculas(){
        include 'conexion_BD.php';
        $lista_peliculas = '<option value="">Selecciona pelicula</option>';
        try{
            $stmt = $conn->prepare("SELECT idpelicula, nombre FROM pelicula order by nombre");
            $stmt->execute();
            $peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach ($peliculas as $pelicula){
                $lista_peliculas .= '<option value="'.$pelicula['idpelicula'].'">'.$pelicula['nombre'].'</option>';
            }
            echo $lista_peliculas;
        }
        catch (PDOException $e){
            echo $e->getMessage();
        }
    }
    listarPeliculas();
?>