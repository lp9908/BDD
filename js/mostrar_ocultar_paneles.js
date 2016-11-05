document.getElementById("aps-panel-c").addEventListener("click", mostrar_ocultar_panel_aps);
document.getElementById("cnf-panel-c").addEventListener("click", mostrar_ocultar_panel_cnf);
document.getElementById("ef-panel-e").addEventListener("click", mostrar_ocultar_panel_ef);

function mostrar_ocultar_panel_aps(){
	$("#aps-contenido-c").slideToggle();
}

function mostrar_ocultar_panel_cnf(){
	$("#cnf-contenido-cm").slideToggle();
}

function mostrar_ocultar_panel_ef(){
	$("#ef-contenido-e").slideToggle();
}

