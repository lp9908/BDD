function busca_peliculas_aps(){
	alert("Hola");
	var selectaps = document.getElementById("aps-pelicula");
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
	http_request.open("POST", "php/listar_peliculas.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send(null);
}
