document.getElementById("generarPredicadoSimple").addEventListener("click", generar_predicado_simple);

function generar_predicado_simple(){
	var aux = 0;
	var tabla = document.getElementById("tablas").value;
	var atributo = document.getElementById("atributos").value;
	var operador = document.getElementById("operador").value;
	var valor = document.getElementById("valor").value;
	var alerta = document.getElementById("msj-error");
	if(tabla == ""){
		aux++;
	}
	if(atributo == ""){
		aux++;
	}
	if(operador == ""){
		aux++;
	}
	if(valor == ""){
		aux++;
	}
	if(aux > 0){
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-warning alert-dismissable' id='mesaje-error'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Error!</strong> <br>Seleccione un valor en todos los campos.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}else{
		var tabla_predicados_simples = document.getElementById("tablaPredicadosSimples");
		var row = tabla_predicados_simples.insertRow(tabla_predicados_simples.rows.length);
		var cell_0 = row.insertCell(0);
		var cell_1 = row.insertCell(1);
		var cell_2 = row.insertCell(2);
		var cell_3 = row.insertCell(3);
		var cell_4 = row.insertCell(4);
		var cell_5 = row.insertCell(5);
		var aux = tabla_predicados_simples.rows.length - 1;
		cell_0.innerHTML = "P" + aux + ":";
		cell_1.innerHTML = "" + atributo;
		cell_2.innerHTML = "" + operador;
		cell_3.innerHTML = "" + valor;
		cell_4.innerHTML = "" + tabla;
		cell_5.innerHTML = "<button  class='btn btn-default btn-xs' type='button' onclick='deleteRow(this)'>Borrar</button>";
		var text_alerta = "	<br/>";
		text_alerta += "		<div class='alert alert-success alert-dismissable' id='mesaje-confir'>";
		text_alerta += "		<button type='button' class='close' data-dismiss='alert'>&times;</button>";
		text_alerta += "		<strong>¡Agregado correctamente!</strong> <br>El predicado simple se agrego correctamente.";
		text_alerta += "	</div>";
		alerta.innerHTML = text_alerta;
	}
}

function deleteRow(r){
	var j = r.parentNode.parentNode.rowIndex;
	var aux;
    document.getElementById("tablaPredicadosSimples").deleteRow(j);
	var tablaPredicados = document.getElementById("tablaPredicadosSimples");
	var numrow = tablaPredicados.rows.length;
	for(aux = 0; aux < numrow; aux++){
		var aux2 = aux + 1;
		document.getElementById('tablaPredicadosSimples').rows[aux2].cells[0].innerHTML = "P" + aux2 + ":";
	}
}
