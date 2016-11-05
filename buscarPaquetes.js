var tablaPaquete = document.getElementById("resultadoBusquedaPaquete");
document.getElementById("campoTipoBusquedaPaquete").addEventListener("change", ejecutaConsultaPaquete);
document.getElementById("campoEstadoPaquete").addEventListener("change", ejecutaConsultaPaquete);
document.getElementById("campoEntradaPaquete").addEventListener("keyup", ejecutaConsultaPaquete);
document.getElementById("buscarPaqueteBtn").addEventListener("click", muestraPaquete);
function muestraPaquete (){
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
			tablaPaquete.innerHTML = "";
			tablaPaquete.innerHTML = http_request.responseText;
			obtenerBotonesEliminarPaquete();
			obtenerBotonesModificarPaquete();
		}
    }
    http_request.open("POST","php/buscarPaquete.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valor="+valor+"&campoPaq=&estadoPaq=&tipoBusquedaPaq=");
}
function ejecutaConsultaPaquete(){
	var comodin = document.getElementById("campoEntradaPaquete").value;
    var parametros = "";
    parametros += "&campoPaq=" + document.getElementById("campoEntradaPaquete").value;
    parametros += "&estadoPaq=" + document.getElementById("campoEstadoPaquete").value;
    parametros += "&valor=0";
    parametros += "&tipoBusquedaPaq="+ document.getElementById("campoTipoBusquedaPaquete").value;
    var http_request = false;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
    if(document.getElementById("campoEntradaPaquete").value == "" && document.getElementById("campoEstadoPaquete").value == 3){
		tablaPaquete.innerHTML = "";
		muestraPaquete();
    }
    else{
		http_request.onreadystatechange = function(){
			if((http_request.readyState == 4)&&(http_request.status == 200)){
				tablaPaquete.innerHTML = "";
				tablaPaquete.innerHTML = http_request.responseText;
				obtenerBotonesModificarPaquete();
				obtenerBotonesEliminarPaquete();
			}
		}
		http_request.open("POST","php/buscarPaquete.php",true);
		http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		http_request.send(parametros);
    }
}
function obtenerBotonesModificarPaquete(){
	var xPaquete = document.getElementsByName("modificaPaqueteBtn");
	var i = 0;
	for(var i=0;i<xPaquete.length; i++){
		xPaquete[i].addEventListener("click", function(){
			var z = this.value;
			document.getElementById("modificaPaqueteFinalBtn").addEventListener("click", function(){
				var parametros = "";
				parametros += "id="+z;
				parametros += "&nombre=" + document.getElementById("campoModificaNombrePaquete").value;
				parametros += "&precio=" + document.getElementById("campoModificaPrecio").value;
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
						$('#myModalPaquete').modal('hide');
						ejecutaConsultaPaquete();
					}
				}
				http_request.open("POST", "php/modificaPaquete.php", true);
				http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http_request.send(parametros);
			});
		});
		xPaquete[i].setAttribute("class", "btn btn-info btn-md");
		xPaquete[i].setAttribute("data-toggle", "modal");
		xPaquete[i].setAttribute("data-target", "#myModalPaquete");
	}
}
function obtenerBotonesEliminarPaquete(){
	var xPaquete = document.getElementsByName("eliminaPaqueteBtn");
	var i = 0;
	for(;i<xPaquete.length; i++){
		xPaquete[i].addEventListener("click", function(){
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
					ejecutaConsultaPaquete();
				}
			}
			http_request.open("POST", "php/eliminaPaquete.php", true);
			http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http_request.send("id="+z);
		});
		xPaquete[i].setAttribute("class", "btn btn-info btn-md");
	}
}