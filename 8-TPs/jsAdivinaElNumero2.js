/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;
var numeroIngresado;
var numeroIngresadoParseado;
var numerosContados;
var numeroAleatorio;
parseInt(contadorIntentos);

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  var min = 1
  var max = 101
  numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
  console.log(numeroAleatorio);
}


function verificar()
{

  numeroIngresado = document.getElementById("numero").value;
  numeroIngresadoParseado = parseInt(numeroIngresado);
  contadorIntentos = contadorIntentos + 1;
  console.log(contadorIntentos);
  document.getElementById("intentos").value = contadorIntentos


     //Operacion IFF
     if (numeroIngresadoParseado < numeroAleatorio) {

      alert("Falta...");
     }else if (numeroIngresado > numeroAleatorio) {

      alert("Se paso...");
        
      }else if (numeroIngresado == numeroAleatorio && contadorIntentos == 1 ) {

         alert("Usted es un psiquico!");
        }else if (numeroIngresado == numeroAleatorio && contadorIntentos == 2 ) {

			alert("Excelente percepcion");
		}else if (numeroIngresado == numeroAleatorio && contadorIntentos == 3 ) {

			alert("Esto es suerte");
		}else if (numeroIngresado == numeroAleatorio && contadorIntentos == 4 ) {

			alert("Excelente tecnica");
		}else if (numeroIngresado == numeroAleatorio && contadorIntentos == 5 ) {

			alert("Usted esta en la media");
		}else if (numeroIngresado == numeroAleatorio && (contadorIntentos >= 6 && contadorIntentos <= 10)) {

			alert("Falta tecnica");
		}else if (numeroIngresado == numeroAleatorio && contadorIntentos > 10 ) {

			alert("Afortunado en el amor!!");
		}
}