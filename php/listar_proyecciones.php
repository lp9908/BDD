 <?php

    function listarSalas(){
        include 'conexion_BD.php';
        $pelicula = $_POST['pelicula'];
        $lista_salas .= '<option value="">Selecciona sala</option>';

        try{
            $stmt = $conn->prepare("select distinct s.proyeccion from funcion f, salapelicula sp, sala s
                                    where f.idpelicula = sp.idpelicula
                                    and sp.idsala = s.idsala
                                    and f.idpelicula = $pelicula
                                    and f.estado = 1");



            $stmt->execute();
            $salas = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(count($salas) > 0){
                foreach ($salas as $sala){
                    $lista_salas .= '<option value="'.$sala['proyeccion'].'">'.$sala['proyeccion'].'</option>';
                }
            }else{
                $lista_salas .= '<option value="">Selecciona proyección</option>';
            }
            echo $lista_salas;
        }catch (PDOException $e){
            echo $e->getMessage();
        }
    }
    listarSalas();
?>
