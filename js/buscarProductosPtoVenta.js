var tablaProductoPtoVA = document.getElementById("resultadoBusquedaProductoPtoVA");
var tablaTiket = document.getElementById("resultadoBusquedaTiket");
var tablaVentaPaq = document.getElementById("tablaVenta");
document.getElementById("CancelarVentaABtn").addEventListener("click",  cancelarVA);
document.getElementById("ConfirmarVentaABtn").addEventListener("click", confirmarVA);
var idP,datosProd, totalF, stotal;
stotal=0;
totalF=0;
document.getElementById("campoEntradaProductoPtoVA").addEventListener("keyup", ejecutaConsultaProductoPtoVA);
function muestraProductoPtoVA (){
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
        tablaProductoPtoVA.innerHTML = "";
        tablaProductoPtoVA.innerHTML = http_request.responseText;
      }
    }
    http_request.open("POST","php/buscarProductoPtoVA.php",true);
    http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    http_request.send("valorProdPtoVA="+valor+"&campoProdPtoVA=");
}

function ejecutaConsultaProductoPtoVA(){
    var comodin = document.getElementById("campoEntradaProductoPtoVA").value;
    var parametros = "";
    parametros += "&campoProdPtoVA=" + document.getElementById("campoEntradaProductoPtoVA").value;
    parametros += "&valorProdPtoVA=0";
    var http_request = false;
    if(window.XMLHttpRequest){
      http_request = new XMLHttpRequest();
    }
    else{
      if(window.ActiveOXbject){
        http_request = new ActiveXObjective("Microsoft.XMLHTTP");
      }
    }

    if(document.getElementById("campoEntradaProductoPtoVA").value == ""){
      tablaProductoPtoVA.innerHTML = "";
      muestraProductoPtoVA();
    }
    else{
      http_request.onreadystatechange = function(){
        if((http_request.readyState == 4)&&(http_request.status == 200)){
          tablaProductoPtoVA.innerHTML = "";
          tablaProductoPtoVA.innerHTML = http_request.responseText;
        }
      }
      http_request.open("POST","php/buscarProductoPtoVA.php",true);
      http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http_request.send(parametros);
    }
}

function agregaProductoIDPtoVA ( idP ){
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
          datosProd=http_request.responseText;
          var posicion = datosProd.lastIndexOf('%');
          var nom=datosProd.substring(posicion, 0);
          var prec=datosProd.substring(posicion+1);
          var tr, td;
          tr = tablaVentaPaq.insertRow(tablaVentaPaq.rows.length);
          td = tr.insertCell(tr.cells.length);
          td.innerHTML = idP;
          td = tr.insertCell(tr.cells.length);
          td.innerHTML = nom;
          td = tr.insertCell(tr.cells.length);
          td.innerHTML = prec;
          td = tr.insertCell(tr.cells.length);
          td.innerHTML = "<input type='number' name=Pro"+idP+" id=Pro"+idP+" min='1' max='20' step='1' value='1' onkeyup='total()' onclick='total()'>";
          td = tr.insertCell(tr.cells.length);
          td.innerHTML = "<button  class='btn btn-default' type='button' onclick='deleteRow(this)'>Borrar</button>";
          td = tr.insertCell(tr.cells.length);
          total();
        }
      }
      http_request.open("POST", "php/buscarProductoPtoVAgregar.php", true);
      http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http_request.send("IDProdPtoVA="+idP);
}

//Elimina la fila donde se encuentre dicho elemento, mandando ese mismo elemento [this]
function deleteRow(r){
  var j = r.parentNode.parentNode.rowIndex;
      document.getElementById("tablaVenta").deleteRow(j);
      var tam=tablaVenta.rows.length;
        if(tam==1 || tam==0){
          document.getElementById('Total').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red></FONT>";
          document.getElementById('STotal').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=blue></FONT>";
        }
        else{
         total();
        }
}

function total() {
  totalF=0;
  var tam=tablaVenta.rows.length;
  var tablon, precF, cantF, pos1,pos2, posID, tipo;
  for(var i=1;i<=tam;i++){
      tablon = document.getElementById("tablaVenta").rows[i].cells;
      precF=tablon[2].innerHTML;
      cantF=tablon[3].innerHTML;
      pos1 = cantF.search("id");
      pos2 = cantF.search("min");
      posID = cantF.substring(pos1+4,pos2-2);
      var b = document.getElementById(posID);
      cantF=b.value;
      if(cantF==""){
        document.getElementById('Total').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red></FONT>";
        document.getElementById('STotal').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=blue></FONT>";
      }
      else{
        totalF=totalF+(parseFloat(precF) * parseFloat(cantF));
        if(Desc!=0){
          stotal= totalF*((100-parseFloat(Desc)) / 100);
          document.getElementById('Total').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>"+stotal+"</FONT>";
            document.getElementById('STotal').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=blue>"+totalF+"</FONT>";

        }
        else{
          stotal=totalF;
          document.getElementById('Total').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>"+totalF+"</FONT>";
            document.getElementById('STotal').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=blue>"+totalF+"</FONT>";
        }
      }
    }
}

function cancelarVA(){
  totalF=0;
  tablaVenta.innerHTML = "<thead><tr><th>ID</th><th>Elemento</th><th>Precio</th><th>Cantidad</th><th>Eliminar</th></tr></thead><tbody></tbody>";
    document.getElementById('Total').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red></FONT>";
    document.getElementById('STotal').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=blue></FONT>";
  }

function confirmarVA() {
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
    }else if(tipoF=="Dlc"){
       tipoF="dulce";
    }else{
       tipoF="paquete";
    }
    var b = document.getElementById(posID);
    cantF=b.value;
    prod = new Elemento(idF,cantF,tipoF);
    listaProductos.push(prod);
  }
  if(stotal==0 && totalF==0){
    window.alert("Realiza primero la venta");
  }
  else{
  	window.alert("CONFIRMA LA VENTA --- $"+ stotal);
  	crearboleto(totalF);
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
  			window.alert(http_request.responseText);
  			muestraProductoPtoVA ();
  			mostrarTicket1();
  			cancelarVA();
  			total();
		  }
	  }
    http_request.open("POST", "php/servidor.php", true);
  	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	http_request.send("productos="+productosJSON);
  }
}

//Objeto utilizado para hacer la lista de venta, no importa si se trata de producto o paquete
function Elemento(idE, cantidadE, tipoE){
    this.idE = idE;
    this.cantE = cantidadE;
    this.tipoE = tipoE;
}

function verElem( e) {
  var resultado = e.idE + " " + e.cantE+" "+ e.tipoE;
  return(resultado);
}

function crearboleto(vtotal){
	var parametrosTicket = "";
	parametrosTicket += "total="+vtotal;
	parametrosTicket += "&idUsuario="+document.getElementById("campoEntradaClientePtoVA").value;
	parametrosTicket += "&idEmpleado=1";
	var http_request = false;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
	else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
  	if((http_request.readyState == 4) && (http_request.status == 200)){
  	   window.alert(http_request.responseText);
  	}
	}
	http_request.open("POST", "php/crearboleto.php", true);
  http_request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	http_request.send(parametrosTicket);
}

function conboletos(){
	var http_request = false;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
	else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function (){
		if((http_request.readyState == 4) && (http_request.status == 200)){
			auxtiket.innerHTML = "";
			auxtiket.innerHTML = http_request.responseText;
		}
	}
	http_request.open("POST", "php/conboleto.php", true);
  http_request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	http_request.send();
}

function mostrarTicket1(){
	var http_request = false;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
	else{
		if(window.ActiveXObject){
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	http_request.onreadystatechange = function(){
      if((http_request.readyState == 4)&&(http_request.status == 200)){
        tablaTiket.innerHTML = "";
        tablaTiket.innerHTML = http_request.responseText;
      }
    }
	http_request.open("POST", "php/buscaTiket.php", true);
  http_request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	http_request.send();
}
