document.getElementById("campoEntradaClientePtoVB").addEventListener("keyup", ejecutaConsultaClientePtoVB);
var Desc=0;

function ejecutaConsultaClientePtoVB(){

    var cliente,pos1,pos2,Email, Tipo;
    var parametros = "valorCliPtoVB="+document.getElementById("campoEntradaClientePtoVB").value;
    var http_request = false;

    if(window.XMLHttpRequest){
        http_request = new XMLHttpRequest();
    }
    else{
        if(window.ActiveOXbject){
          http_request = new ActiveXObjective("Microsoft.XMLHTTP");
        }
    }

    if(document.getElementById("campoEntradaClientePtoVB").value != ""){

        http_request.onreadystatechange = function(){

            if((http_request.readyState == 4)&&(http_request.status == 200)){

                cliente = http_request.responseText;

                if(cliente==""){
                    document.getElementById('InfoCliEmB').innerHTML = "<FONT FACE='calibri' SIZE=3 COLOR=blue>-</FONT>";
                    document.getElementById('InfoCliTipB').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=green>-</FONT>";
                    document.getElementById('InfoCliDesB').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>-</FONT>";
                }
                else{
                    pos1 = cliente.lastIndexOf('?');
                    pos2 = cliente.lastIndexOf('%');
                    Email = cliente.substring(0,pos1);
                    Tipo = cliente.substring(pos1+1,pos2);
                    Desc = cliente.substring(pos2+1,cliente.length);
                    document.getElementById('InfoCliEmB').innerHTML = "<FONT FACE='calibri' SIZE=3 COLOR=blue>"+ Email +"</FONT>";
                    document.getElementById('InfoCliTipB').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=green>"+ Tipo+"</FONT>";
                    document.getElementById('InfoCliDesB').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>"+ Desc +"%</FONT>";
                    total();
                }
            }
        }

        http_request.open("POST","php/buscarClientePtoVBol.php",true);
        http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        http_request.send(parametros);
    }
    else{
        document.getElementById('InfoCliEmB').innerHTML = "<FONT FACE='calibri' SIZE=3 COLOR=blue>-</FONT>";
        document.getElementById('InfoCliTipB').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=green>-</FONT>";
        document.getElementById('InfoCliDesB').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>-</FONT>";
        Desc=0;
        total();
    }
}
