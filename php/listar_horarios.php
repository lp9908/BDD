<?php
    /*function listarIdiomas(){
        include 'conexion_BD.php';
        $pelicula = $_POST['pelicula'];
        $sala = $_POST['sala'];
        $lista_salas = '';

        try{
            $stmt = $conn->prepare("SELECT sp.idioma FROM sala s, salapelicula sp, pelicula p, funcion f
                                WHERE s.idsala = sp.idsala
                                AND sp.idpelicula = p.idpelicula
                                AND p.idpelicula = $pelicula
                                AND s.proyeccion = '$sala'
                                order by proyeccion");
            $stmt->execute();
            $salas = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(count($salas) > 0){
                $lista_salas = '<option>Selecciona la sala</option>';
                foreach ($salas as $sala){
                    $lista_salas .= '<option value="">'.$sala['idioma'].'</option>';
                }
            }else{
                $lista_salas = '<option></option>';
            }
            echo $lista_salas;
        }catch (PDOException $e){
            echo $e->getMessage();
        }
    }*/

    function listarHorarios(){
        include 'conexion_BD.php';
        $pelicula = $_POST['pelicula'];
        $proyeccion = $_POST['proyeccion'];
        $lista_horarios = '';

        try{
            $stmt = $conn->prepare("SELECT distinct f.idsala, f.idioma, f.hora, f.fecha FROM sala s, funcion f, salapelicula sp
                                    WHERE f.idsala = sp.idsala
                                    AND sp.idsala = s.idsala
                                    AND f.idpelicula = $pelicula
                                    AND s.proyeccion = '$proyeccion'
                                    AND f.estado = 1");



            $stmt->execute();
            $funciones = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(count($funciones) > 0){
                foreach ($funciones as $funcion){
                    $lista_horarios .= "<tr>
                                        <td id='".$funcion['idsala']."'>".$funcion['idsala']."</td>
                                        <td>".$funcion['idioma']."</td>
                                        <td>".$funcion['fecha']."</td>
                                        <td>".$funcion['hora']."</td>
                                        <td> <input type='radio' name='peliculaSeleccionada' onclick='agregarTituloATicket(),ObtenerValFuncAs(this)'></td>
                                      <tr>";
                }
            }else{
                $lista_horarios .= "<tr>
                                    <td> - </td>
                                    <td> - </td>
                                    <td> - </td>
                                  <tr>";
            }
            echo $lista_horarios;
        }catch (PDOException $e){
            echo $e->getMessage();
        }
    }
    listarHorarios();
?>
