/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var numeroIngresadoParseado;
var numerosContados;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   min = 1
   max = 101
   numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;

   //Datos por ID
   contadorIntentos = document.getElementById("intentos").value;
   console.log(numeroAleatorio);

		//alert(numeroSecreto );
}

var contadorIntentos =1;

function verificar()
{

  numeroIngresado = document.getElementById("numero").value;
  numeroIngresadoParseado = parseInt(numeroIngresado);


     //Operacion IFF
     if (numeroIngresadoParseado < numeroAleatorio) {

      document.getElementById("intentos").value = contadorIntentos++;
      alert("Falta...");
     }else
      if (numeroIngresado > numeroAleatorio) {

        document.getElementById("intentos").value = contadorIntentos++;
       alert("Se paso...");
        
      }else
        if (numeroIngresado == numeroAleatorio) {

         alert("Usted es un ganador! y solo en " + contadorIntentos);
        }
}