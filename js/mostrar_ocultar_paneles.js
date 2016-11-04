document.getElementById("aps-panel-c").addEventListener("click", mostrar_ocultar_panel_aps);
document.getElementById("cnf-panel-c").addEventListener("click", mostrar_ocultar_panel_cnf);

function mostrar_ocultar_panel_aps(){
	$("#aps-contenido-c").slideToggle();
}

function mostrar_ocultar_panel_cnf(){
	$("#cnf-contenido-cm").slideToggle();
}
