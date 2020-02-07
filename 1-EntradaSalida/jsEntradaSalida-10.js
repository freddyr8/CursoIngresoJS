/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numeroUnoIngresado;
    var numeroUnoParseado;
    var RESULTADO;
    var operacion;

    //Obtener valores por ID
    numeroUnoIngresado = document.getElementById("importe").value;

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);

    //operacion
    operacion = numeroUnoParseado *25/100;

    //resultado 
    RESULTADO = operacion;

    //Obtener valores por ID despues de asignacion
    document.getElementById("resultado").value=RESULTADO

	
}
