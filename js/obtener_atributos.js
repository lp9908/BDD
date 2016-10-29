document.getElementById("tablas").addEventListener("change", busca_Atributos);

function busca_Atributos(){
	var table = document.getElementById("tablas").value;
	var attrs = document.getElementById("atributos");
	var http_request = null;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			attrs.innerHTML = http_request.responseText;
			tabla_Atributos();
		}
	}
    http_request.open("POST", "php/listar_atributos.php", true);
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.send("table="+table);
}

function tabla_Atributos(){
	var table = document.getElementById("tablas").value;
	var attrs = document.getElementById("tablaAtributos");
	var http_request = null;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			attrs.innerHTML = http_request.responseText;
		}
	}
    http_request.open("POST", "php/tabla_atributos.php", true);
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.send("table="+table);
}
