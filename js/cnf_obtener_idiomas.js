document.getElementById("cnf-pelicula").addEventListener("change", busca_idiomas_cnf);
document.getElementById("cnf-sala").addEventListener("change", busca_idiomas_cnf);

function busca_idiomas_cnf(){
	var nombreP = document.getElementById("cnf-pelicula").value;
	var nombreS = document.getElementById("cnf-sala").value;
	var selectaps = document.getElementById("cnf-idioma");
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
		http_request.open("POST", "php/listar_idiomas.php", true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.send("nombreP="+nombreP+"&nombreS="+nombreS);
	}
}
