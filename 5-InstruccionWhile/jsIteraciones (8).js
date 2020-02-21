function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta=true;
	var acumulador = 0;

	while (respuesta == true) {

		numero = prompt("Ingrese un numero");

		//validar
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero valido");
			numero = parseInt(numero);	
		}
		if (numero >= 0) {

			positivo += numero;

		}else{
			contador++;
			negativo *= numero;
			
		}
		
		//acumulador
		
		console.log(positivo);
		console.log(negativo);
		respuesta = confirm("Desea continuar?");
	}
	if (contador == 0) {
		
		negativo = 0;
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN