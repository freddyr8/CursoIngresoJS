function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	var min;
	var max;

	//Operacion mat
	min = 1
	max = 11
	numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;

	//Operacion IFF
	if (numeroAleatorio >= 9) {
		alert(numeroAleatorio + " EXCELENTE");		
	}else{
		if (numeroAleatorio >= 4) {
			alert(numeroAleatorio + " Aprobo");
		}else{
			alert(numeroAleatorio + " Vamos la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN