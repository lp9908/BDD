var AsientosVenta = [];
var AsientosDisp= "";
AsientosDisp = AsientosDisp.split("");
var cantAsBol=0;
var cantAsiPed=0;
var cantAsiSel=0;
var idpel,idsala,idio,fec,hor, peliSel;

function cambio(elmnt){
    var op = elmnt.value;

    if(op==0){
        if(cantAsiSel<cantAsiPed){
            elmnt.innerHTML="<img src='images/2.png'>";
            elmnt.value=2;
            AsientosVenta.push(elmnt.id);
            cantAsiSel++;
            document.getElementById('InfoCantAsiSel').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=blue>"+cantAsiSel+"</FONT>";
            document.getElementById('DatosAsientos').innerHTML ="Asientos seleccionados: "+AsientosVenta;
        }
        else{
            window.alert("Ya has seleccionado todos los asientos solicitados ["+cantAsiPed+ "],\nDESELECCIONA ALGUNO O BORRA TODA LA SELECCIÓN");
        }
    }

    if(op==2){
        elmnt.innerHTML="<img src='images/0.png'>";
        elmnt.value=0;
        var i = AsientosVenta.indexOf(elmnt.id);
        AsientosVenta.splice(i, 1);
        cantAsiSel--;
        document.getElementById('InfoCantAsiSel').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=blue>"+cantAsiSel+"</FONT>";
    }
}

function ObtenerValFuncAs(celda){

    peliSel=celda;
    document.getElementById("edo").innerHTML="<img src='images/b.png' width=97%>";

    var td = celda.parentNode;
    var tr = td.parentNode;
    var trS = tr.getElementsByTagName('td');
    idpel= document.getElementById('nombrePeliculaPtoVtaBol').value;
    idsala = trS[0].id;
    idio= trS[1].textContent;
    fec=trS[2].textContent;
    hor=trS[3].textContent;

    var http_request = null;

    try{
        if(window.XMLHttpRequest)
            http_request = new XMLHttpRequest();
        else{
            if(window.ActiveXObject){
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }

        http_request.onreadystatechange = function (){
            if((http_request.readyState == 4) && (http_request.status == 200)){
                AsientosDisp=http_request.responseText;
                AsientosDisp = AsientosDisp.split("");
                ObtenerDispSala();
            }
        }
        http_request.open("POST", "php/ObtenerDisAsientos.php", true);
        http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http_request.send("pelicula="+idpel+"&sala="+idsala+"&idioma="+idio+"&fecha="+fec+"&hora="+hor);
    }
    catch(err){
        window.alert(err.message);
    }
}

function ObtenerDispSala(){
    cantAsBol=0;
    cantAsiPed=0;
    cantAsiSel=0;
    var l, el,x;

    for(i=0;i<AsientosDisp.length;i++){
        if(i<6){
            l="D";
            x=i+1;
        }
        else if(i>5 && i<12){
            l="C";
            x=i-5;
        }
        else if(i>11 && i<18){
            l="B";
            x=i-11;
        }
        else{
            l="A";
            x=i-16;
        }

        el = document.getElementById(l+x);

        if(AsientosDisp[i] =="1"){
            el.innerHTML="<img src='images/1.png'>";
            el.disabled="disabled";
            el.value=1;
        }
        else{
            el.innerHTML="<img src='images/0.png'>";
            el.disabled="disabled";
            el.value=0;
            cantAsBol++;
        }
    }

    if(cantAsBol==0 && AsientosDisp!=""){
        document.getElementById("edo").innerHTML="<img src='images/c.png' width=97%>";
    }

    while(AsientosVenta.length > 0) {
        AsientosVenta.pop();
    }

    document.getElementById('InfoCantAsi').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=green>"+cantAsBol+"</FONT>";
    document.getElementById('InfoCantAsiPed').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=red>"+cantAsiPed+"</FONT>";
    document.getElementById('InfoCantAsiSel').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=blue>"+cantAsiSel+"</FONT>";
    document.getElementById("numBoletosNino").value="";
    document.getElementById("numBoletosAdulto").value="";
    document.getElementById("numBoletosTerceraEdad").value="";
}
