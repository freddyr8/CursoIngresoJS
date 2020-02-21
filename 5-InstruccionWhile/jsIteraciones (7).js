function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero;
	//var salir = false;

	while (respuesta == true) {

		contador++;
		numero = prompt("Ingrese un numero");
		
		//validar
		numero = parseInt(numero);

		while (isNaN(numero)) {
			
			numero = prompt("ingrese un numero valido");
			numero = parseInt(numero);
		}

		//acumulamos
		acumulador += numero;
		console.log(acumulador);
		respuesta = confirm("Desea continuar?");
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN