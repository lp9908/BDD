document.getElementById('nombrePeliculaPtoVtaBol').addEventListener('change', listarProyecciones);
document.getElementById('proyPeliculaPtoVtaBol').addEventListener('change', listarHorarios);

function listarHorarios(){
    var http_request = null;
    var pelicula = document.getElementById('nombrePeliculaPtoVtaBol').value;
    var proyeccion = document.getElementById('proyPeliculaPtoVtaBol').value;
    if(pelicula == ''){
        document.getElementById('horariosTabla').innerHTML = '';
    }
    else{
        try{
            if(window.XMLHttpRequest)
		      http_request = new XMLHttpRequest();
            else{
                if(window.ActiveXObject){
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                }
            }
            http_request.onreadystatechange = function (){
                if((http_request.readyState == 4) && (http_request.status == 200)){
                    //window.alert(http_request.responseText);
                    document.getElementById('horariosTabla').innerHTML = http_request.responseText;
                }
            }
            http_request.open("POST", "php/listar_horarios.php", true);
            http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http_request.send("pelicula="+pelicula+"&proyeccion="+proyeccion);
        }
        catch(err) {
            window.alert(err.message);
        }
    }
}

function listarProyecciones(){
    if(document.getElementById('nombrePeliculaPtoVtaBol').value == ''){
        document.getElementById('proyPeliculaPtoVtaBol').setAttribute('disabled', 'disabled');
    }
    else{
        document.getElementById('proyPeliculaPtoVtaBol').removeAttribute('disabled');
        var http_request = null;
        var pelicula = document.getElementById('nombrePeliculaPtoVtaBol').value;
        try{
            if(window.XMLHttpRequest)
		        http_request = new XMLHttpRequest();
            else{
                if(window.ActiveXObject){
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                }
            }
            http_request.onreadystatechange = function (){
                if((http_request.readyState == 4) && (http_request.status == 200)){
                    //window.alert(http_request.responseText);
                    document.getElementById('proyPeliculaPtoVtaBol').innerHTML = http_request.responseText;
                }
            }
            http_request.open("POST", "php/listar_proyecciones.php", true);
            http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http_request.send("pelicula="+pelicula);
        }
        catch(err) {
            window.alert(err.message);
        }
    }
}
