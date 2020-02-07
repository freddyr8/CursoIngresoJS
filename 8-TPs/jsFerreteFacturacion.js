/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroTresIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var numeroTresParseado;
    var resultadoUno;
    var resultadoDos;
    var resultadoTres;

    //Obtener datos por ID
    numeroUnoIngresado = document.getElementById("PrecioUno").value;
    numeroDosIngresado = document.getElementById("PrecioDos").value;
    numeroTresIngresado = document.getElementById("PrecioTres").value;
    
    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);
    numeroTresParseado = parseInt(numeroTresIngresado);
    
    //Operacion
    resultadoUno = numeroUnoParseado + numeroDosParseado + numeroTresParseado;
    
    //Resultado
    alert(resultadoUno);
}
function Promedio () 
{
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroTresIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var numeroTresParseado;
    var resultadoUno;
    var resultadoDos;

    //Obtener datos por ID
    numeroUnoIngresado = document.getElementById("PrecioUno").value;
    numeroDosIngresado = document.getElementById("PrecioDos").value;
    numeroTresIngresado = document.getElementById("PrecioTres").value;
    
    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);
    numeroTresParseado = parseInt(numeroTresIngresado);
    
    //Operacion
    resultadoUno = numeroUnoParseado + numeroDosParseado + numeroTresParseado;
    resultadoDos = resultadoUno/3;
    
    //Resultado
    alert(resultadoDos);
}
function PrecioFinal () 
{
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroTresIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var numeroTresParseado;
    var resultadoUno;
    var resultadoDos;
    var resultadoTres;

    //Obtener datos por ID
    numeroUnoIngresado = document.getElementById("PrecioUno").value;
    numeroDosIngresado = document.getElementById("PrecioDos").value;
    numeroTresIngresado = document.getElementById("PrecioTres").value;
    
    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);
    numeroTresParseado = parseInt(numeroTresIngresado);
    
    //Operacion
    resultadoUno = numeroUnoParseado + numeroDosParseado + numeroTresParseado;
    resultadoDos = resultadoUno*0.21;
    resultadoTres = resultadoUno + resultadoDos;
    
    //Resultado
    alert(resultadoTres);
	
}