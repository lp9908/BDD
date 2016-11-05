var tablaUs = document.getElementById("resultadoBusquedaUsuarios");
document.getElementById("campoTipoBusquedaUs").addEventListener("change", ejecutaConsultaUsu);
document.getElementById("campoEstadoUsuario").addEventListener("change", ejecutaConsultaUsu);
document.getElementById("campoEntradaUsuario").addEventListener("keyup", ejecutaConsultaUsu);
document.getElementById("buscarUsuarioBtn").addEventListener("click", muestraUsuarios);
function muestraUsuarios (){
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
			tablaUs.innerHTML = "";
			tablaUs.innerHTML = http_request.responseText;
			obtenerBotonesEliminarUs();
			obtenerBotonesModificarUs();
		}
    }
    http_request.open("POST","php/buscarUsuario.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valorUs="+valor+"&campoUs=&estadoUs=&tipoBusquedaUs=");
}
function ejecutaConsultaUsu(){
	var comodin = document.getElementById("campoEntradaUsuario").value;
    var parametros = "";
    parametros += "&campoUs=" + document.getElementById("campoEntradaUsuario").value;
    parametros += "&estadoUs=" + document.getElementById("campoEstadoUsuario").value;
    parametros += "&valorUs=";
    parametros += "&tipoBusquedaUs="+ document.getElementById("campoTipoBusquedaUs").value;
	var http_request = false;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
    if(document.getElementById("campoEntradaUsuario").value == "" && document.getElementById("campoEstadoUsuario").value == 3){
		tablaUs.innerHTML = "";
		muestraUsuarios();
    }
    else{
		http_request.onreadystatechange = function(){
			if((http_request.readyState == 4)&&(http_request.status == 200)){
				tablaUs.innerHTML = "";
				tablaUs.innerHTML = http_request.responseText;
				obtenerBotonesEliminarUs();
				obtenerBotonesModificarUs();
			}
		}
      http_request.open("POST","php/buscarUsuario.php",true);
      http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http_request.send(parametros);
    }
}
function obtenerBotonesModificarUs(){
	var x = document.getElementsByName("modificaUsuarioBtn");
	var i = 0;
	for(;i<x.length; i++){
		x[i].addEventListener("click", function(){
			var z = this.value;
			document.getElementById("modificaUsuarioFinalBtn").addEventListener("click", function(){
				var parametros = "";
				parametros += "idUsu="+z;
				parametros += "&nombreUs=" + document.getElementById("campoModificaNombreUs").value;
				parametros += "&apPaternoUs=" + document.getElementById("campoModificaAPUs").value;
				parametros += "&apMaternoUs=" + document.getElementById("campoModificaAMUs").value;
				parametros += "&emailUs=" + document.getElementById("campoModificaEmailUs").value;
				parametros += "&tipoUs=" + document.getElementById("campoModificaTipoUsuario").value;
				parametros += "&passwordUs=" + document.getElementById("campoModificaPassUs").value;
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
						$('#myModalUs').modal('hide');
						ejecutaConsultaUsu();
					}
				}
				http_request.open("POST", "php/modificaUsuario.php", true);
				http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http_request.send(parametros);
			});
		});
		x[i].setAttribute("class", "btn btn-info btn-md");
		x[i].setAttribute("data-toggle", "modal");
		x[i].setAttribute("data-target", "#myModalUs");
	}
}
function obtenerBotonesEliminarUs(){
	var x = document.getElementsByName("eliminaUsuarioBtn");
	var i = 0;
	for(;i<x.length; i++){
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
					ejecutaConsultaUsu();
				}
			}
			http_request.open("POST", "php/eliminaUsuario.php", true);
			http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http_request.send("idUs="+z);
		});
		x[i].setAttribute("class", "btn btn-info btn-md");
	}
}