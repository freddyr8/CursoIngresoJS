function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta=true;
	var minimo = 0;
	var maximo = 0;
	var numero;
	var primeraVez = true; 


	while(respuesta == true)
	{
		numero = prompt("Ingrese un numero");

		//validar
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero valido");
			numero = parseInt(numero);
			
		}

		//Calculo
		if (primeraVez) {

			primeraVez = false;
			minimo = numero;
			maximo = numero;
			
		}else{
			//A partir de la 2da iteracion
			if (numero > maximo){

				maximo = numero;

			}if (numero < minimo){

				minimo = numero;

			}
		}


	console.log(maximo);
	console.log(minimo);
	respuesta = confirm("Desea continuar?");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN