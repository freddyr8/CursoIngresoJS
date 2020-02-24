/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio = 0;
var noEntiendo = 0; //document.getElementById("number");
window.setInterval(function comenzar(){
  noEntiendo = tiempoInicio;
  tiempoInicio++;
},1000);



function comenzar()
{
    min = 1;
    max = 7;
    colorSecreto = Math.floor(Math.random() * (max- min)) + min;
    console.log(colorSecreto);

    switch (colorSecreto) {
        case 1:
            document.getElementById("ColorElejido").value = "azul";
            break;
        case 2:
            document.getElementById("ColorElejido").value = "amarillo";
            break;
        case 3:
            document.getElementById("ColorElejido").value = "marron";
            break;
        case 4:
            document.getElementById("ColorElejido").value = "verde";
            break;
        case 5:
            document.getElementById("ColorElejido").value = "celeste";
            break;
        case 6:
            document.getElementById("ColorElejido").value = "rojo";
    }
}//FIN DE LA FUNCIÓN


function Responder(colorParametro)
{
    if (colorParametro == document.getElementById("ColorElejido").value) {

        alert("Tardaste " + tiempoInicio + " segundos!" );
        
    }


}//FIN DE LA FUNCIÓN
