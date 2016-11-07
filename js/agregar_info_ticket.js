function habilitarBoletos(){
    var boletos = document.getElementsByClassName('numBol');
    var i = 0;
    for(; i<boletos.length; i++){
        boletos[i].removeAttribute('disabled');
    }

}

function agregarTituloATicket(){
    document.getElementById('ticketBody').innerHTML = "";

    var pelicula = document.getElementById('nombrePeliculaPtoVtaBol').options[document.getElementById('nombrePeliculaPtoVtaBol').options.selectedIndex].text;

    var titulo = document.createElement('h4');
    var ntitulo = document.createTextNode("Película: "+pelicula);
    titulo.appendChild(ntitulo);

    var cliente = document.createElement('h4');
    cliente.appendChild(document.createTextNode("Tipo cliente: " + document.getElementById('InfoCliTipB').textContent));

    document.getElementById('ticketBody').appendChild(titulo);
    document.getElementById('ticketBody').appendChild(cliente);
    habilitarBoletos();
}


function agregarBoletos(){
    document.getElementById('ticketBody').innerHTML = "";
    agregarTituloATicket();

    var etiquetaNino = document.createElement('h5');
    var numBoletosNino = document.createTextNode('Boletos nino: '+document.getElementById('numBoletosNino').value);
    etiquetaNino.appendChild(numBoletosNino);

    var etiquetaAdulto = document.createElement('h5');
    var numBoletosAdulto = document.createTextNode('Boletos adulto: '+document.getElementById('numBoletosAdulto').value);
    etiquetaAdulto.appendChild(numBoletosAdulto);

    var etiquetaTerceraEdad = document.createElement('h5');
    var numBoletosTerceraEdad = document.createTextNode('Boletos tercera edad: '+document.getElementById('numBoletosTerceraEdad').value);
    etiquetaTerceraEdad.appendChild(numBoletosTerceraEdad);



    document.getElementById('ticketBody').appendChild(etiquetaNino);
    document.getElementById('ticketBody').appendChild(etiquetaAdulto);
    document.getElementById('ticketBody').appendChild(etiquetaTerceraEdad);
    document.getElementById('ticketBody').innerHTML += "<label id='DatosAsientos'></label>";
}
