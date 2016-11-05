var parametrosUs = "";
document.getElementById("agregarUsuarioBtnFin").addEventListener("click", enviaUsuario);
function obtenFormularioUs(){
	var x = document.forms["formAgregarUsuario"];
	parametrosUs = "idUsuario="+x.elements[0].value+"&tipoUsuario="+x.elements[1].value+"&nombreUsuario="+x.elements[2].value+"&apPaternoUsuario="+x.elements[3].value+"&apMaternoUsuario="+x.elements[4].value+"&emailUsuario="+x.elements[5].value+"&passwordUsuario="+x.elements[6].value;
}
function muestraUsuario(){
	obtenFormularioUs();
	window.alert(parametrosUs+"YEAH");
}
function enviaUsuario(){
	obtenFormularioUs();
	var http_request = false;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
	else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			window.alert(http_request.responseText);
		}
	}
	http_request.open("POST", "php/agregaUsuario.php", true);
  	http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http_request.send(parametrosUs);
}
