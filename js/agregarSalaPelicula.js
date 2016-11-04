document.getElementById("asignarPSI").addEventListener("click", agregar_sala_pelicula);

function agregar_sala_pelicula(){
	var aux = 0;
	var nombreP = document.getElementById("aps-pelicula").value;
	var nombreS = document.getElementById("aps-sala").value;
	var nombreI = document.getElementById("aps-idioma").value;
	var alerta = document.getElementById("aps-msj-error");
	if(nombreP == ""){
		aux++;
	}
	if(nombreS == ""){
		aux++;
	}
	if(nombreI == ""){
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
					text_alerta += "		<strong>¡Error!</strong> <br> La pelicula ya fue asignada.";
					text_alerta += "	</div>";
					alerta.innerHTML = text_alerta;
				}
			}
		}
		http_request.open("POST", "php/agregarSalaPelicula.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreP="+nombreP+"&nombreS="+nombreS+"&nombreI="+nombreI);
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
		text_alerta += "		<strong>¡Asignada correctamente!</strong> <br>La pelicula fue asignada a la sala correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}