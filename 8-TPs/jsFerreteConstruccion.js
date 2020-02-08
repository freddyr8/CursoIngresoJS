/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerrenoIngresado;
    var anchoTerrenoIngresado;
    var largoTerrenoParseado;
    var anchoTerrenoParseado;
    var operacion;
    var resultado;
   
    //Obtener datos por ID
    largoTerrenoIngresado = document.getElementById("Largo").value;
    anchoTerrenoIngresado = document.getElementById("Ancho").value;

    //Parseo de datos
    largoTerrenoParseado = largoTerrenoIngresado;
    anchoTerrenoParseado = anchoTerrenoIngresado;

    //Operacion
    operacion = (largoTerrenoParseado)*2 + (anchoTerrenoParseado)*2;
    resultado = operacion*3;

    //Resultado
    alert("La cantidad a comprar serian " + resultado + "mts de alambre ");


}
function Circulo () 
{
    var radioIngresado;
    var radioParseado;
    var operacion;
    var resultado;

    //Obtener datos por ID
    radioIngresado = document.getElementById("Radio").value;

    //Parseo de datos
    radioParseado = radioIngresado;

    //Operacion
    operacion = radioParseado*2;
    resultado = operacion*Math.PI;

    //Resultado
    alert("La cantidad de mts de alambre a comprar serian: " + resultado);
}
function Materiales () 
{
    var largoTerrenoIngresado;
    var anchoTerrenoIngresado;
    var largoTerrenoParseado;
    var anchoTerrenoParseado;
    var operacion;
    var resultadoCem;
    var resultadoCal
   
    //Obtener datos por ID
    largoTerrenoIngresado = document.getElementById("Largo").value;
    anchoTerrenoIngresado = document.getElementById("Ancho").value;

    //Parseo de datos
    largoTerrenoParseado = parseInt(largoTerrenoIngresado);
    anchoTerrenoParseado = parseInt(anchoTerrenoIngresado);

    //Operacion
    operacion = (largoTerrenoParseado)*2 + (anchoTerrenoParseado)*2;
    resultadoCem = operacion*2;
    resultadoCal = operacion*3;

    //Resultado
    alert("Se necesitan " + resultadoCem + " bolsas de cemento y " + resultadoCal + " bolsas de cal");
	
}