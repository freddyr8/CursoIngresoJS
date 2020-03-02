function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta = true;
	var numero;
	var positivo = 0;
	var negativo = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorNumerosPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaEntrePositivosYNegativos;




	while(respuesta == true)
	{

		numero = prompt("Ingrese un numero");

		//validar
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero valido");
			numero = parseInt(numero);
				
			}

		//Operacion

		if (numero > 0) {
			//Positivos punto 2 y 3
			contadorPositivos++;
			positivo += numero;
			
		}else if(numero < 0){
			//Negativos punto 1 y 4
			contadorNegativos++;
			negativo -= numero;
		}else {
			//Punto 5
			contadorCeros++;

		}if (numero % 2 == 0) {
			//Punto 6
			contadorNumerosPares++;
		}
		respuesta = confirm("Desea continuar?");

		//Punto 7
		if (contadorPositivos != 0) {

			promedioPositivos = positivo / contadorPositivos;
			
		}
		
		//Punto 8
		if (contadorNegativos !=0) {

			promedioNegativos = negativo / contadorNegativos;
			
		}

		//Punto 9

		diferenciaEntrePositivosYNegativos = positivo - negativo;
	}

	//P1R
	document.write("Suma de los negativos: " + negativo + "<br>");
	//P2R
	document.write("Suma de los positivos: " + positivo + "<br>");
	//P3R
	document.write("Cantidad de positivos: " + contadorPositivos + "<br>" );
	//P4R
	document.write("Cantidad de negativos: " + contadorNegativos + "<br>");
	//P5R
	document.write("Cantidad de ceros: " + contadorCeros + "<br>");
	//P6R
	document.write("Cantidad de numeros pares: " + contadorNumerosPares + "<br>");
	//P7R
	document.write("Promedio de positivos: " + promedioPositivos + "<br>");
	//P8R
	document.write("Promedio de negativos:" + promedioNegativos + "<br>");
	//P9R
	document.write("Diferencia entre positivos y negativos: " + diferenciaEntrePositivosYNegativos);
	
}//FIN DE LA FUNCIÓN