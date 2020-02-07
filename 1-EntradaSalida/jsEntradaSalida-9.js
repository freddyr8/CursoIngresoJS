/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numeroUnoIngresado;
    var numeroUnoParseado;
    var resultad;
    var total;

    //Obtener valores por ID
    numeroUnoIngresado = document.getElementById("sueldo").value;

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);

    //Operacion
    total = numeroUnoParseado *10 /100;

    //resultado total
    resultad = total

    //Obtener valores por ID prueba 2
    document.getElementById("resultado").value=resultad;
}
