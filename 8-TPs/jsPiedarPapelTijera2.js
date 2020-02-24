var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;


function comenzar()
{
    min = 1;
    max = 4;
    eleccionMaquina = Math.floor(Math.random() * (max - min)) + min;
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{ 
    switch (eleccionMaquina) {
        case 1:
			contadorDeEmpates++;
			alert("Empate");
            break;
        case 2:
			contadorDePerdidas++;
			alert("Perdiste!");
            break;
        case 3:
			contadorDeGanadas++;
			alert("Ganaste")
            break;
	}
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function papel()
{
    switch (eleccionMaquina) {
        case 1:
			alert("Ganaste!");
			contadorDeGanadas++;
            break;
        case 2:
			alert("Empate!");
			contadorDeEmpates++;
            break;
        case 3:
			alert("Perdiste!");
			contadorDePerdidas++;
            break;
	}
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function tijera()
{
    switch (eleccionMaquina) {
        case 1:
			alert("Perdiste!");
			contadorDePerdidas++;
            break;
        case 2:
			alert("Ganaste!");
			contadorDeGanadas++;
            break;
        case 3:
			alert("Empate!");
			contadorDeEmpates++;
            break;
	}
	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

	document.getElementById("ganadas").value = contadorDeGanadas;
	document.getElementById("perdidas").value = contadorDePerdidas;
	document.getElementById("empatadas").value = contadorDeEmpates;

}