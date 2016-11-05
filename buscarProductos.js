var tablaProducto = document.getElementById("resultadoBusquedaProducto");
document.getElementById("campoTipoBusquedaProducto").addEventListener("change", ejecutaConsultaProducto);
document.getElementById("campoEstadoProducto").addEventListener("change", ejecutaConsultaProducto);
document.getElementById("campoEntradaProducto").addEventListener("keyup", ejecutaConsultaProducto);
document.getElementById("buscarProductoBtn").addEventListener("click", muestraProducto);
function muestraProducto (){
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
			tablaProducto.innerHTML = "";
			tablaProducto.innerHTML = http_request.responseText;
			obtenerBotonesEliminarProducto();
			obtenerBotonesModificarProducto();
		}
    }
    http_request.open("POST","php/buscaProducto.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valorProd="+valor+"&campoProd=&estadoProd=&tipoBusquedaProd=");
}
function ejecutaConsultaProducto(){
    var comodin = document.getElementById("campoEntradaProducto").value;
    var parametros = "";
    parametros += "&campoProd=" + document.getElementById("campoEntradaProducto").value;
    parametros += "&estadoProd=" + document.getElementById("campoEstadoProducto").value;
    parametros += "&valorProd=0";
    parametros += "&tipoBusquedaProd="+ document.getElementById("campoTipoBusquedaProducto").value;
    var http_request = false;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
    if(document.getElementById("campoEntradaProducto").value == "" && document.getElementById("campoEstadoProducto").value == 3){
		tablaProducto.innerHTML = "";
		muestraProducto();
    }
    else{
		http_request.onreadystatechange = function(){
			if((http_request.readyState == 4)&&(http_request.status == 200)){
				tablaProducto.innerHTML = "";
				tablaProducto.innerHTML = http_request.responseText;
				obtenerBotonesModificarProducto();
				obtenerBotonesEliminarProducto();
			}
		}
		http_request.open("POST","php/buscaProducto.php",true);
		http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		http_request.send(parametros);
    }
}
function obtenerBotonesModificarProducto(){
	var xProducto = document.getElementsByName("modificaProductoBtn");
	var i = 0;
	for(var i=0;i<xProducto.length; i++){
		xProducto[i].addEventListener("click", function(){
			var z = this.value;
			document.getElementById("modificaProductoFinalBtn").addEventListener("click", function(){
				var parametros = "";
				parametros += "id="+z;
				parametros += "&nombre=" + document.getElementById("campoModificaNombreProducto").value;
				parametros += "&precioUnitario=" + document.getElementById("campoModificaPrecioUnitario").value;
				parametros += "&existencia=" + document.getElementById("campoModificaExistencia").value;
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
						$('#myModalProducto').modal('hide');
						ejecutaConsultaProducto();
					}
				}
				http_request.open("POST", "php/modificaProducto.php", true);
				http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http_request.send(parametros);
			});
		});
		xProducto[i].setAttribute("class", "btn btn-info btn-md");
		xProducto[i].setAttribute("data-toggle", "modal");
		xProducto[i].setAttribute("data-target", "#myModalProducto");
	}
}
function obtenerBotonesEliminarProducto(){
	var xProducto = document.getElementsByName("eliminaProductoBtn");
	var i = 0;
	for(;i<xProducto.length; i++){
		xProducto[i].addEventListener("click", function(){
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
					ejecutaConsultaProducto();
				}
			}
			http_request.open("POST", "php/eliminaProducto.php", true);
			http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http_request.send("id="+z);
		});
		xProducto[i].setAttribute("class", "btn btn-info btn-md");
	}
}