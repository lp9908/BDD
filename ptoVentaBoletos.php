<!DOCTYPE html>
<html lang="en">
<head>
  <title>Punto de Venta Boletos</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Punto de venta boletos</h1>
            </div>
        </div>
        <hr>
    </div>

    <div class="container">
        <div class="row">
            <div class="tab-content">
                <div class="col-sm-3 ">
                    <input type="text" class="form-control" id="campoEntradaClientePtoVB" name="campoEntradaClientePtoVB" placeholder="ID CLIENTE">
                </div>
                <div class="col-sm-3 text-center" >
                     <label id="InfoCliEmB"><FONT FACE="calibri" SIZE=5 COLOR=blue>-</FONT></label>
                </div>
                <div class="col-sm-3 text-center">
                    <label id="InfoCliTipB"><FONT FACE="calibri" SIZE=5 COLOR=green>-</FONT></label>
                </div>
                <div class="col-sm-3 text-center">
                    <label id="InfoCliDesB"><FONT FACE="calibri" SIZE=5 COLOR=red>-</FONT></label>
                </div>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
               <div class="panel panel-default">
                   <div class="panel-heading">Escoja su pelicula</div>
                    <div class="panel-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="nombrePeliculaPtoVtaBol" class="col-sm-2 control-label">Pelicula</label>
                                <div class="col-sm-12">
                                    <select id="nombrePeliculaPtoVtaBol" class="form-control">
                                        <?php
                                            include 'php/listar_peliculas.php';
                                        ?>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="proyPeliculaPtoVtaBol" class="col-sm-2 control-label">Proyección</label>
                                <div class="col-sm-12">
                                    <select id="proyPeliculaPtoVtaBol" class="form-control"  disabled>
                                        <option value="">Selecciona proyección</option>
                                    </select>
                                </div>
                            </div>

                            <div class="table-responsive">
                                 <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sala</th>
                                            <th>Idioma</th>
                                            <th>Fecha</th>
                                            <th>Hora</th>
                                            <th><th>
                                        </tr>
                                    </thead>
                                    <tbody id="horariosTabla">

                                    </tbody>
                                 </table>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">----</div>
                </div>
	        </div>
	        <div class="col-sm-8">
                <div class="panel panel-default">
                    <div class="panel-heading">Escoja su asiento</div>
                    <div class="panel-body">
                        <img src="images/sala2.jpg" width=99%>
                            <div class="col-sm-2"   style="position: absolute; left: 16%; top: 18%; z-index: 1;">
                                    <button id='D1' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
            						    <img src="images/0.png">
                                    </button>
                      				<button id='C1' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                                        <img src="images/0.png">
                      		        </button>
                      				<button id='B1' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      		    </div>
                	        <div  class="col-sm-2" style="position: absolute; left: 26%; top: 18%; z-index: 1;">
                      			    <button id='D2' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      				<button id='C2' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      				<button id='B2' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      				<br><br><br>
                      				<button id='A2' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                				</div>
                			<div  class="col-sm-2" style="position: absolute; left: 46%; top: 18%; z-index: 1;">
                      			    <button id='D3' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                  				    	<img src="images/0.png">
                  		            </button>
                  					<button id='C3' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                  						<img src="images/0.png">
                      				</button>
                      				<button id='B3' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      		        <br><br><br>
                      				<button id='A3' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                				</div>
                			<div  class="col-sm-2" style="position: absolute; left: 56%; top: 18%; z-index: 1;">
                      			    <button id='D4' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                          				<img src="images/0.png">
                          			</button>
                          			<button id='C4' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                          				<img src="images/0.png">
                          			</button>
                      			    <button id='B4' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      			    	<img src="images/0.png">
                          			</button>
                          			<br><br><br>
                          			<button id='A4' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                          				<img src="images/0.png">
                          			</button>
                                </div>
                			<div  class="col-sm-2" style="position: absolute; left: 66%; top: 18%; z-index: 1;">
                      			    <button id='D5' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      				    <img src="images/0.png">
                      			    </button>
                      			    <button id='C5' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                          				<img src="images/0.png">
                          			</button>
                              			<button id='B5' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                          				<img src="images/0.png">
                          			</button>
                          			<br><br><br>
                              			<button id='A5' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                          				<img src="images/0.png">
                          			</button>
                                </div>
                			<div  class="col-sm-2" style="position: absolute; left: 76%; top: 18%; z-index: 1;">
                      			    <button id='D6' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      				<button id='C6' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                      				<button id='B6' value="0" style='background-color:transparent; border-color:transparent' onclick="cambio(this)">
                      					<img src="images/0.png">
                      				</button>
                				    </div>
                            <div id="edo"style="position: absolute; left: 4%; top: 9%; z-index: 1;">
                                  <img src="images/b.png" width=97%>
                            </div>
                    </div>
                    <div class="panel-footer">
                      <div class="col-sm-3 text-center">
                          <label><FONT FACE="calibri" SIZE=3 COLOR=black>DISPONIBLES:</FONT></label>
                          <label id="InfoCantAsi"><FONT FACE="calibri" SIZE=4 COLOR=green>-</FONT></label>
                        </div>
                      <div class="col-sm-3 text-center">
                          <label><FONT FACE="calibri" SIZE=3 COLOR=black>PEDIDOS:</FONT></label>
                          <label id="InfoCantAsiPed"><FONT FACE="calibri" SIZE=4 COLOR=red>-</FONT></label>
                      </div>
                      <div class="col-sm-3 text-center">
                          <label><FONT FACE="calibri" SIZE=3 COLOR=black>SELECCIONADOS:</FONT></label>
                          <label id="InfoCantAsiSel"><FONT FACE="calibri" SIZE=4 COLOR=blue>-</FONT></label>
                      </div>
                      <div class="col-sm-3 text-center">
                          <button id="LimSal" class="button btn btn-default" onclick="LimpSala()" disabled="disabled">Borrar Selección</button>
                          <button  id="ActVen" class="button btn btn-success" onclick="ActAsientosVenta()" disabled="disabled">ACTUALIZAR</button>
                      </div>
                      <br>
                      <br></div>
                </div>
	        </div>
        </div>
	    <div class="row">

	        <div class="col-lg-6">
               <div class="panel panel-default">
                   <div class="panel-heading">Cantidad de Boletos</div>
                    <div class="panel-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="numBoletosNino" class="col-sm-4 control-label"># boletos niño: </label>
                                <div class="col-sm-8">
                                   <input type="number" class="form-control numBol" id="numBoletosNino" min="0" max="10" onclick="agregarBoletos(), bolPed()" onkeyup="agregarBoletos(), bolPed()" disabled>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="numBoletosAdulto" class="col-sm-4 control-label"># boletos adulto: </label>
                                <div class="col-sm-8">
                                   <input type="number" class="form-control numBol" id="numBoletosAdulto" min="0" max="10" onclick="agregarBoletos(), bolPed()" onkeyup="agregarBoletos(), bolPed()" disabled>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="numBoletosTerceraEdad" class="col-sm-4 control-label"># boletos 3era edad: </label>
                                <div class="col-sm-8">
                                   <input type="number" class="form-control numBol" id="numBoletosTerceraEdad" min="0" max="10" onclick="agregarBoletos(), bolPed()" onkeyup="agregarBoletos(), bolPed()" disabled>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">----</div>
                </div>
	        </div>
	        <div class="col-sm-6">
               <div class="panel panel-default">
                   <div class="panel-heading">Ticket</div>
                      <div class="panel-body" id="ticketBody">
                      </div>
                    <div class="panel-footer"><input type="button" class="button btn btn-primary" value="Confirmar venta"></div>
                </div>
	        </div>
	    </div>
	</div>

	<!--Scripts js-->
	<script type="text/javascript" src="js/listar_info_pelicula.js"></script>
	<script type="text/javascript" src="js/asignar_tipo_boleto.js"></script>
	<script type="text/javascript" src="js/agregar_info_ticket.js"></script>
	<script type="text/javascript" src="js/SelecAsientos_ObDisAsiPtoVBol.js"></script>
	<script type="text/javascript" src="js/ActualizarDisAsientos_PtoVtaBol.js"></script>
    <script type="text/javascript" src="js/buscarClientePtoVentaBol.js"></script>
    <script> window.onload = function() { ObtenerDispSala ();};</script>
</body>
</html>
