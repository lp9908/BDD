function ActAsientosVenta(){
    if(cantAsiSel==cantAsiPed){
        var AsientosAUX=AsientosDisp;

        for(i=0;i<AsientosVenta.length;i++){
            if(AsientosVenta[i][0]=="D"){
                AsientosAUX[Number(AsientosVenta[i][1])-1]="1";
            }
            else if(AsientosVenta[i][0]=="C"){
                AsientosAUX[Number(AsientosVenta[i][1])+5]="1";
            }
            else if(AsientosVenta[i][0]=="B"){
                AsientosAUX[Number(AsientosVenta[i][1])+11]="1";
            }
            else {
                AsientosAUX[Number(AsientosVenta[i][1])+16]="1";
            }
        }

        var AsientosUPDATE="";

        for(i=0;i<AsientosAUX.length;i++){
            if(AsientosAUX[i]!=","){
                AsientosUPDATE+=AsientosAUX[i];
            }
        }

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
                    window.alert(http_request.responseText);
                    ObtenerValFuncAs(peliSel);
                }
            }

            http_request.open("POST", "php/ActualizarDisAsientos.php", true);
            http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http_request.send("disA="+AsientosUPDATE+"&pelicula="+idpel+"&sala="+idsala+"&idioma="+idio+"&fecha="+fec+"&hora="+hor);
        }
        catch(err){
            window.alert(err.message);
            ObtenerValFuncAs(peliSel);
        }
    }
    else{
        window.alert("Solo has seleccionado ["+cantAsiSel+"] asiento(s)\n hace FALTA seleccionar ["+(cantAsiPed-cantAsiSel)+"] asiento(s)");
    }
}

function bolPed(){
    cantAsiPed=0;

    cantAsiPed+=Number(document.getElementById("numBoletosNino").value);
    cantAsiPed+=Number(document.getElementById("numBoletosAdulto").value);
    cantAsiPed+=Number(document.getElementById("numBoletosTerceraEdad").value);

    if(cantAsiPed!=0 && cantAsBol!=0){
        document.getElementById("edo").innerHTML="";
        document.getElementById("LimSal").disabled="";
        document.getElementById("ActVen").disabled="";

        if(cantAsBol>=cantAsiPed){
            document.getElementById('InfoCantAsi').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=green>"+cantAsBol+"</FONT>";
            document.getElementById('InfoCantAsiPed').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=red>"+cantAsiPed+"</FONT>";
            document.getElementById('InfoCantAsiSel').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=blue>"+cantAsiSel+"</FONT>";
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

                if(AsientosDisp[i] =="0"){
                    el.disabled="";
                }
            }
        }
        else{
            window.alert("La función cuenta con "+cantAsBol+ " asiento(s) disponibles, has SOLICITADO "+cantAsiPed+"\nDISMINUYE LA CANTIDAD DE BOLETOS");
        }
      }
      else if(cantAsBol==0 && AsientosDisp!=""){
        document.getElementById("edo").innerHTML="<img src='images/c.png' width=97%>";
      }
      else{
        document.getElementById("edo").innerHTML="<img src='images/b.png' width=97%>";
      }
    }

function LimpSala(){
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
        if(el.value!=1){
            el.disabled="";
            el.value=0;
            el.innerHTML="<img src='images/0.png'>";
        }
    }

    while(AsientosVenta.length > 0) {
        AsientosVenta.pop();
    }

    cantAsiSel=0;
    document.getElementById('InfoCantAsiSel').innerHTML="<FONT FACE='calibri' SIZE=4 COLOR=blue>"+cantAsiSel+"</FONT>";
    document.getElementById('DatosAsientos').innerHTML ="Asientos seleccionados: ";
}
