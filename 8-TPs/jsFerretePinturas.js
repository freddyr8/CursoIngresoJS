/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ 
    var temperaturaIngresada;
    var temperaturaParseada;
    var fahrToC;

    //Ingresando datos por ID
    temperaturaIngresada = document.getElementById("Temperatura").value;
    
    //Parseo de datos
    temperaturaParseada = parseInt(temperaturaIngresada);

    //Operacion
    fahrToC = (temperaturaParseada - 32) * 5 / 9;

    //Resultado
    alert(temperaturaParseada + ' Fahrenheit son ' + fahrToC + ' Centígrados');
}

function CentigradosFahrenheit () 
{
    var temperaturaIngresada;
    var temperaturaParseada;
    var cToFahr;

    //Ingresando datos por ID
    temperaturaIngresada = document.getElementById("Temperatura").value;
    
    //Parseo de datos
    temperaturaParseada = parseInt(temperaturaIngresada);

    //Operacion
    cToFahr = temperaturaParseada * 9 / 5 + 32;
    
    //Resultado
    alert(temperaturaParseada + " Centígrados son " + cToFahr + " Fahrenheit");
}
