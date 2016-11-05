document.getElementById("campoEntradaClientePtoVA").addEventListener("keyup", ejecutaConsultaClientePtoVA);
var Desc=0;

function ejecutaConsultaClientePtoVA(){
	var cliente,pos1,pos2,Email, Tipo;
	var parametros = "valorCliPtoVA="+document.getElementById("campoEntradaClientePtoVA").value;
	var http_request = false;
	if(window.XMLHttpRequest){
		http_request = new XMLHttpRequest();
	}
	else{
		if(window.ActiveOXbject){
			http_request = new ActiveXObjective("Microsoft.XMLHTTP");
		}
	}
	if(document.getElementById("campoEntradaClientePtoVA").value != ""){
		http_request.onreadystatechange = function(){
		if((http_request.readyState == 4)&&(http_request.status == 200)){
			cliente = http_request.responseText;
				if(cliente==""){
					document.getElementById('InfoCliEm').innerHTML = "<FONT FACE='calibri' SIZE=3 COLOR=blue>-</FONT>";
					document.getElementById('InfoCliTip').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=green>-</FONT>";
					document.getElementById('InfoCliDes').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>-</FONT>";
				}else{
					pos1 = cliente.lastIndexOf('?');
					pos2 = cliente.lastIndexOf('%');
					Email = cliente.substring(0,pos1);
					Tipo = cliente.substring(pos1+1,pos2);
					Desc = cliente.substring(pos2+1,cliente.length);
					document.getElementById('InfoCliEm').innerHTML = "<FONT FACE='calibri' SIZE=3 COLOR=blue>"+ Email +"</FONT>";
					document.getElementById('InfoCliTip').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=green>"+ Tipo+"</FONT>";
					document.getElementById('InfoCliDes').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>"+ Desc +"%</FONT>";
					total();
				}
			}
		}
		http_request.open("POST","php/buscarClientePtoVA.php",true);
		http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		http_request.send(parametros);
	}else{
		document.getElementById('InfoCliEm').innerHTML = "<FONT FACE='calibri' SIZE=3 COLOR=blue>-</FONT>";
		document.getElementById('InfoCliTip').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=green>-</FONT>";
		document.getElementById('InfoCliDes').innerHTML = "<FONT FACE='calibri' SIZE=5 COLOR=red>-</FONT>";
		Desc=0;
		total();
	}
}
