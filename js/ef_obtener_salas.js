document.getElementById("ef-pelicula").addEventListener("change", busca_salas_ef);

function busca_salas_ef(){
	var nombreP = document.getElementById("ef-pelicula").value;
	var selectaps = document.getElementById("ef-sala");
	var selectafs = document.getElementById("ef-fecha");
	var selectahs = document.getElementById("ef-hora");
	var http_request = null;
	if(nombreP == ""){
		selectaps.innerHTML = "<option value=''> Selecciona sala </option>";
		selectafs.innerHTML = "<option value=''> Selecciona fecha</option>";
		selectahs.innerHTML = "<option value=''> Selecciona funcion </option>";
	}else{
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
		http_request.open("POST", "php/listar_salas_peliculas.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreP="+nombreP);
		selectafs.innerHTML = "<option value=''> Selecciona fecha </option>";
		selectahs.innerHTML = "<option value=''> Selecciona funcion </option>";
	}
}
