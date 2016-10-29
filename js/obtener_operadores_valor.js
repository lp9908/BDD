document.getElementById("atributos").addEventListener("change", busca_operadores);

function busca_operadores(){
	var table = document.getElementById("tablas").value;
	var attrs = document.getElementById("atributos").value;
	var operadores = document.getElementById("div-operador");
	var valor = document.getElementById("div-valor");
	var http_request = null;
	var texto;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			var temp = http_request.responseText.toString();
			if(temp == "int(11)" || temp == "float" || temp == "tinyint(1)"){
				texto = "<input type='number' class='form-control' id='valor' placeholder='Valor'>";
				valor.innerHTML = texto;
			}else if(temp[0] == 'v'){
				texto = "<input type='text' class='form-control' id='valor' placeholder='Valor'>";
				valor.innerHTML = texto;
			}else if(temp == "date"){
				texto = "<input type='date' class='form-control' id='valor' placeholder='Valor'>";
				valor.innerHTML = texto;
			}else if(temp == "time"){
				texto = "<input type='text' class='form-control' id='valor' placeholder='00:00:00'>";
				valor.innerHTML = texto;
			}else{
				texto = "<input type'text' class='form-control' id='valor' placeholder='Valor'>";
				valor.innerHTML = texto;
			}
			if(temp == "int(11)" || temp == "float" || temp == "tinyint(1)" || temp == "date" || temp == "time"){
				texto = "<select class='form-control' id='operador' name='operador'>";
				texto += "	<option value='='> = (Igual)</option>";
				texto += "	<option value='>'> > (Mayor)</option>";
				texto += "	<option value='<'> < (Menor)</option>";
				texto += "	<option value='>='> >= (Mayor igual)</option>";
				texto += "	<option value='<='> <= (Menos igual)</option>";
				texto += "	<option value='<>'> <> (Diferente)</option>";
				texto += "</select>";
				operadores.innerHTML = texto;
			}else if(temp[0] == 'v'){
				texto = "<select class='form-control' id='operador' name='operador'>";
				texto += "	<option value='like'> like (Como)</option>";
				texto += "	<option value='='> = (Igual)</option>";
				texto += "</select>";
				operadores.innerHTML = texto;
			}else{
				texto = "<select class='form-control' id='operador' name='operador'>";
				texto += "	<option value=''> Selecciona operador</option>";
				texto += "</select>";
				operadores.innerHTML = texto;
			}
			//operadores.innerHTML = http_request.responseText;
		}
	}
    http_request.open("POST", "php/tipo_atributo.php", true);
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.send("table="+table+"&attr="+attrs);
}