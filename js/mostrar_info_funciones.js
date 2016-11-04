document.getElementById("info-fecha").addEventListener("change", mostrar_info_salas);

function mostrar_info_salas(){
	var fecha = document.getElementById("info-fecha").value;
	var selectaps = document.getElementById("infoSalas");
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
			selectaps.innerHTML = http_request.responseText;
		}
	}
	http_request.open("POST", "php/info_salas.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send("fecha="+fecha);
}