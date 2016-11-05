var tablaPeliculas = document.getElementById("resultadoBusquedaPeliculas");
document.getElementById("campoBuscarPelicula").addEventListener("change", ejecutaConsultaPelicula);
document.getElementById("campoEstadoPelicula").addEventListener("change", ejecutaConsultaPelicula);
document.getElementById("campoEntradaPelicula").addEventListener("keyup", ejecutaConsultaPelicula);
document.getElementById("buscarPeliculaBtn").addEventListener("click", muestraPelicula);
function muestraPelicula(){
	var http_request = false;
	var valor = 10;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
	http_request.onreadystatechange = function(){
		if((http_request.readyState == 4)&&(http_request.status == 200)){
			tablaPeliculas.innerHTML = "";
			tablaPeliculas.innerHTML = http_request.responseText;
			obtenerBotonesEliminarPelicula();
			obtenerBotonesModificarPelicula();
		}
	}
    http_request.open("POST","php/buscaPelicula.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valor="+valor+"&campo=&estado=&tipoBusqueda=");
}
function ejecutaConsultaPelicula(){
	var parametros = "";
    parametros += "tipoBusqueda=" + document.getElementById("campoBuscarPelicula").value;
    parametros += "&campo=" + document.getElementById("campoEntradaPelicula").value;
    parametros += "&estado=" + document.getElementById("campoEstadoPelicula").value;
	parametros += "&valor=0";
    var http_request = false;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
	if(document.getElementById("campoEntradaPelicula").value == "" && document.getElementById("campoEstadoPelicula").value == 0){
		tablaPeliculas.innerHTML = "";
		muestraPelicula();
    } 
	else{
		http_request.onreadystatechange = function(){
			if((http_request.readyState == 4)&&(http_request.status == 200)){
				tablaPeliculas.innerHTML = "";
				tablaPeliculas.innerHTML = http_request.responseText;
				obtenerBotonesEliminarPelicula();
				obtenerBotonesModificarPelicula();
			}
		}
		http_request.open("POST","php/buscaPelicula.php",true);
		http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		http_request.send(parametros);
	}
}
function obtenerBotonesModificarPelicula(){
	var xp = document.getElementsByName("modificaPeliculaBtn");
	var i = 0;
	for(i = 0;i < xp.length; i++){
		xp[i].addEventListener("click", function(){
			var z = this.value;
			document.getElementById("modificaPeliculaFinalBtn").addEventListener("click", function(){
				var parametrosp = "";
				parametrosp += "id="+z;
				parametrosp += "&nombre=" + document.getElementById("campoModificaNombrePelicula").value;
				parametrosp += "&clasificacion=" + document.getElementById("campoModificaClasificacionPelicula").value;
				parametrosp += "&genero=" + document.getElementById("campoModificaGeneroPelicula").value;
				parametrosp += "&duracion=" + document.getElementById("campoModificaDuracionPelicula").value;
				parametrosp += "&sinopsis=" + document.getElementById("campoModificaSinopsisPelicula").value;
				parametrosp += "&fechaEstreno=" + document.getElementById("campoModificaFechaEstrenoPelicula").value;
				parametrosp += "&fechaTermino=" + document.getElementById("campoModificaFechaTerminoPelicula").value;
				parametrosp += "&estado=" + document.getElementById("campoModificaEstadoPelicula").value;
				var http_request = false;
				if(window.XMLHttpRequest){
					http_request = new XMLHttpRequest();
				}
				else{
					if(window.ActiveOXbject){
						http_request = new ActiveXObjective("Microsoft.XMLHTTP");
					}
				}
				http_request.onreadystatechange = function (){
					if((http_request.readyState == 4) && (http_request.status == 200)){
						window.alert(http_request.responseText);
						$('#myModalPeliculas').modal('hide');
						ejecutaConsultaPelicula();
					}
				}
				http_request.open("POST", "php/modificaPelicula.php", true);
				http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http_request.send(parametrosp);
			});
		});
		xp[i].setAttribute("class", "btn btn-info btn-md");
		xp[i].setAttribute("data-toggle", "modal");
		xp[i].setAttribute("data-target", "#myModalPeliculas");
	}
}
function obtenerBotonesEliminarPelicula(){
	var x = document.getElementsByName("eliminaPeliculaBtn");
	var i = 0;
	for(i = 0;i < x.length; i++){
		x[i].addEventListener("click", function(){
			var z = this.value;
			var http_request = false;
			if(window.XMLHttpRequest){
				http_request = new XMLHttpRequest();
			}
			else{
				if(window.ActiveOXbject){
					http_request = new ActiveXObjective("Microsoft.XMLHTTP");
				}
			}
			http_request.onreadystatechange = function (){
				if((http_request.readyState == 4) && (http_request.status == 200)){
					window.alert(http_request.responseText);
					ejecutaConsultaPelicula();
				}
			}
			http_request.open("POST", "php/eliminaPelicula.php", true);
			http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http_request.send("id="+z);
		});
		x[i].setAttribute("class", "btn btn-info btn-md");
	}
}