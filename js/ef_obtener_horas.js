document.getElementById("ef-fecha").addEventListener("change", busca_fechas_ef);

function busca_fechas_ef(){
	var nombreP = document.getElementById("ef-pelicula").value;
	var nombreS = document.getElementById("ef-sala").value;
	var nombreF = document.getElementById("ef-fecha").value;
	var selectaps = document.getElementById("ef-hora");
	if(nombreP != "" && nombreS != ""){
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
		http_request.open("POST", "php/listar_horas.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreP="+nombreP+"&nombreS="+nombreS+"&nombreF="+nombreF);
	}
}
