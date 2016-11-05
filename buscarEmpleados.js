var tabla = document.getElementById("resultadoBusqueda");
document.getElementById("campoTipoBusqueda").addEventListener("change", ejecutaConsulta);
document.getElementById("campoEstadoEmpleado").addEventListener("change", ejecutaConsulta);
document.getElementById("campoEntradaEmpleado").addEventListener("keyup", ejecutaConsulta);
document.getElementById("buscarEmpleadoBtn").addEventListener("click", muestraEmpleados);
function muestraEmpleados (){
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
        tabla.innerHTML = "";
        tabla.innerHTML = http_request.responseText;
        obtenerBotonesEliminar();
        obtenerBotonesModificar();
      }
    }
    http_request.open("POST","php/buscarEmpleado.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valor="+valor+"&campo=&estado=&tipoBusqueda=");
}
function ejecutaConsulta(){
    var comodin = document.getElementById("campoEntradaEmpleado").value;
    var parametros = "";
    parametros += "&campo=" + document.getElementById("campoEntradaEmpleado").value;
    parametros += "&estado=" + document.getElementById("campoEstadoEmpleado").value;
    parametros += "&valor=";
    parametros += "&tipoBusqueda="+ document.getElementById("campoTipoBusqueda").value;
    var http_request = false;
    if(window.XMLHttpRequest){
      http_request = new XMLHttpRequest();
    }
    else{
      if(window.ActiveOXbject){
        http_request = new ActiveXObjective("Microsoft.XMLHTTP");
      }
    }
    if(document.getElementById("campoEntradaEmpleado").value == "" && document.getElementById("campoEstadoEmpleado").value == 3){
      tabla.innerHTML = "";
      muestraEmpleados();
    }
    else{
      http_request.onreadystatechange = function(){
        if((http_request.readyState == 4)&&(http_request.status == 200)){
          tabla.innerHTML = "";
          tabla.innerHTML = http_request.responseText;
          obtenerBotonesEliminar();
          obtenerBotonesModificar();
        }
      }
      http_request.open("POST","php/buscarEmpleado.php",true);
      http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http_request.send(parametros);
    }
}
function obtenerBotonesModificar(){
	var x = document.getElementsByName("modificaEmpleadoBtn");
	var i = 0;
	for(;i<x.length; i++){
		x[i].addEventListener("click", function(){
			var z = this.value;
			document.getElementById("modificaEmpleadoFinalBtn").addEventListener("click", function(){
				var parametros = "";
				parametros += "id="+z;
				parametros += "&nombre=" + document.getElementById("campoModificaNombre").value;
				parametros += "&apPaterno=" + document.getElementById("campoModificaAP").value;
				parametros += "&apMaterno=" + document.getElementById("campoModificaAM").value;
				parametros += "&email=" + document.getElementById("campoModificaEmail").value;
				parametros += "&tipoEmpleado=" + document.getElementById("campoModificaTipoEmpleado").value;
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
						$('#myModal').modal('hide');
						ejecutaConsulta();
					}
				}
				http_request.open("POST", "php/modificaEmpleado.php", true);
				http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http_request.send(parametros);
			});
		});
		x[i].setAttribute("class", "btn btn-info btn-md");
		x[i].setAttribute("data-toggle", "modal");
		x[i].setAttribute("data-target", "#myModal");
	}
}
function obtenerBotonesEliminar(){
  var x = document.getElementsByName("eliminaEmpleadoBtn");
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
					ejecutaConsulta();
				}
			}
			http_request.open("POST", "php/eliminaEmpleado.php", true);
			http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http_request.send("id="+z);
		});
		x[i].setAttribute("class", "btn btn-info btn-md");
	}
}