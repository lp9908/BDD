document.getElementById("eliminarFuncion").addEventListener("click", eliminar_funcion);

function eliminar_funcion(){
	var aux = 0;
	var nombreP = document.getElementById("ef-pelicula").value;
	var nombreS = document.getElementById("ef-sala").value;
	var nombreF = document.getElementById("ef-fecha").value;
	var nombreH = document.getElementById("ef-hora").value;
	var alerta = document.getElementById("ef-msj-error");
	if(nombreP == ""){
		aux++;
	}
	if(nombreS == ""){
		aux++;
	}
	if(nombreF == ""){
		aux++;
	}
	if(nombreH == ""){
		aux++;
	}
	if(aux > 0){
		
	}else{
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
				if(http_request.responseText.toString().length != 4){
					var text_alerta = "	<br/>";
					text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
					text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
					text_alerta += "		<strong>¡Error!</strong> <br> La funcion no fue eliminada.";
					text_alerta += "	</div>";
					alerta.innerHTML = text_alerta;
				}else{
					mostrar_info_salas();
				}
			}
		}
		http_request.open("POST", "php/eliminarFuncion.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreP="+nombreP+"&nombreS="+nombreS+"&nombreF="+nombreF+"&nombreH="+nombreH);
	}
	if(aux > 0){
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Error!</strong> <br>Seleccione y escriba un valor en todos los campos.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}else{
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Eliminado correctamente!</strong> <br>La funcion fue eliminada correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}