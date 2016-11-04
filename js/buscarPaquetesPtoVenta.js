var tablaPaquetePtoVA = document.getElementById("resultadoBusquedaPaquetePtoVA");
var id,datosPaq;
document.getElementById("campoEntradaPaquetePtoVA").addEventListener("keyup", ejecutaConsultaPaquetePtoVA);

//Muestra todos los paquetes
function muestraPaquetePtoVA (){
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
      tablaPaquetePtoVA.innerHTML = http_request.responseText;
    }
  }
  http_request.open("POST","php/buscarPaquetePtoVA.php",true);
  http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  http_request.send("valorPaqPtoVA="+valor+"&campoPaqPtoVA=");
}

//De acuerdo al dato que se escriba , realiza la busqueda y muestra paquetes
function ejecutaConsultaPaquetePtoVA(){
    var comodin = document.getElementById("campoEntradaPaquetePtoVA").value;
    var parametros = "";
    parametros += "&campoPaqPtoVA=" + document.getElementById("campoEntradaPaquetePtoVA").value;
    parametros += "&valorPaqPtoVA=0";
    var http_request = false;
    if(window.XMLHttpRequest){
      http_request = new XMLHttpRequest();
    }
    else{
      if(window.ActiveOXbject){
        http_request = new ActiveXObjective("Microsoft.XMLHTTP");
      }
    }
    if(document.getElementById("campoEntradaPaquetePtoVA").value == ""){
      tablaPaquetePtoVA.innerHTML = "";
      muestraPaquetePtoVA();
    }
    else{
      http_request.onreadystatechange = function(){
        if((http_request.readyState == 4)&&(http_request.status == 200)){
          tablaPaquetePtoVA.innerHTML = "";
          tablaPaquetePtoVA.innerHTML = http_request.responseText;
        }
      }
      http_request.open("POST","php/buscarPaquetePtoVA.php",true);
      http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http_request.send(parametros);
    }
}

//Agrega el paquete a la lista de venta
function agregaPaqueteIDPtoVA ( id ){
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
      datosPaq=http_request.responseText;
      var posicion = datosPaq.lastIndexOf('%');
      var nom=datosPaq.substring(posicion, 0);
      var prec=datosPaq.substring(posicion+1);
      var tr, td;
      tr = tablaVentaPaq.insertRow(tablaVentaPaq.rows.length);
      td = tr.insertCell(tr.cells.length);
      td.innerHTML = id;
      td = tr.insertCell(tr.cells.length);
      td.innerHTML = nom;
      td = tr.insertCell(tr.cells.length);
      td.innerHTML = prec;
      td = tr.insertCell(tr.cells.length);
      td.innerHTML = "<input type='number' name=Paq"+id+" id=Paq"+id+" min='1' max='20' step='1' value='1' onkeyup='total()' onclick='total()'>";
      td = tr.insertCell(tr.cells.length);
      td.innerHTML = "<button  class='btn btn-default' type='button' onclick='deleteRow(this)'>Borrar</button>";
      td = tr.insertCell(tr.cells.length);
      total();
    }
  }
  http_request.open("POST", "php/buscarPaquetePtoVAgregar.php", true);
  http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http_request.send("IDPaqPtoVA="+id);
}
