var tablaProductoDBAPaq = document.getElementById("resultadoBusquedaProductoDBAPaq");
var tablaDBAPaq = document.getElementById("tablaDBAPaq");
var idP,datosProd, totalF;
document.getElementById("campoEntradaProductoDBAPaq").addEventListener("keyup", ejecutaConsultaProductoDBAPaq);
function muestraProductoDBAPaq (){
	var http_request = false;
	var valor = 10;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
	http_request.onreadystatechange = function(){
		if((http_request.readyState == 4)&&(http_request.status == 200)){
			tablaProductoDBAPaq.innerHTML = "";
			tablaProductoDBAPaq.innerHTML = http_request.responseText;
		}
    }
    http_request.open("POST","php/buscarProductoDBAPaq.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valorProdDBAPaq="+valor+"&campoProdDBAPaq=");
}
function ejecutaConsultaProductoDBAPaq(){
    var comodin = document.getElementById("campoEntradaProductoDBAPaq").value;
    var parametros = "";
    parametros += "&campoProdDBAPaq=" + document.getElementById("campoEntradaProductoDBAPaq").value;
    parametros += "&valorProdDBAPaq=0";
    var http_request = false;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
    }
    if(document.getElementById("campoEntradaProductoDBAPaq").value == ""){
		tablaProductoDBAPaq.innerHTML = "";
		muestraProductoDBAPaq();
    }
    else{
		http_request.onreadystatechange = function(){
			if((http_request.readyState == 4)&&(http_request.status == 200)){
				tablaProductoDBAPaq.innerHTML = "";
				tablaProductoDBAPaq.innerHTML = http_request.responseText;
			}
		}
		http_request.open("POST","php/buscarProductoDBAPaq.php",true);
		http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		http_request.send(parametros);
    }
}
function agregaProductoIDDBAPaqA ( idP ){
    var i = 0;
    var http_request = false;
    if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
    }
    else{
        if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
        }
    }
    http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			nomProd=http_request.responseText;
			var tr, td;
			tr = tablaDBAPaq.insertRow(tablaDBAPaq.rows.length);
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = idP;
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = nomProd;
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = "<input type='number' name=Pro"+idP+" id=Pro"+idP+" min='1' max='20' step='1' value='1' onclick='total()'>";
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = "<button  class='btn btn-default' type='button' onclick='deleteRow(this)'>Borrar</button>";
			td = tr.insertCell(tr.cells.length);
        }
    }
	http_request.open("POST", "php/buscarProductoDBAPaqAgr.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send("IDProdDBAPaq="+idP);
}
function deleteRow(r){
	var j = r.parentNode.parentNode.rowIndex;
	document.getElementById("tablaDBAPaq").deleteRow(j);
	var tam=tablaVenta.rows.length;
}
function confirmarAgregar(){
	var tablon, idF, cantF,tipoF, pos1,pos2, posID;
    var prod;
	var tam=tablaVenta.rows.length;
	var listaProductos = [];
	for(var i=1;i<tam;i++){
		tablon = document.getElementById("tablaVenta").rows[i].cells;
		idF=tablon[0].innerHTML;
		cantF=tablon[3].innerHTML;
		pos1 = cantF.search("id");
		pos2 = cantF.search("min");
		posID = cantF.substring(pos1+4,pos2-2);
		tipoF=cantF.substring(pos1+4,pos1+7);
		if(tipoF=="Pro"){
			tipoF="producto";
		}
		else{
			tipoF="paquete"
		}
		var b = document.getElementById(posID);
		cantF=b.value;
		prod = new Elemento(idF,cantF,tipoF);
		listaProductos.push(prod);
	}
	window.alert("CONFIRMA LA VENTA --- $"+ totalF);
	var productosJSON = JSON.stringify(listaProductos);
	var i = 0;
	var http_request = false;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
	else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			if(http_request.responseText=="Existencias modificadas"){
				cancelarVA();
			}
			window.alert(http_request.responseText);
		}
	}
	http_request.open("POST", "php/servidor.php", true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send("productos="+productosJSON);
}
function Elemento(idE, cantidadE, tipoE){
	this.idE = idE;
    this.cantE = cantidadE;
    this.tipoE = tipoE;
}
function verElem( e) {
	var resultado = e.idE + " " + e.cantE+" "+ e.tipoE;
	return(resultado);
}