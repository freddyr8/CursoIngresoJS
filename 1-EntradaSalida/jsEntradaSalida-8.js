/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;
    
    //obtener valores por ID

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //Parseo de datos
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);
    
    //operación
    resultado = (numeroUnoParseado + numeroDosParseado)
	console.log(numeroUnoParseado)
    console.log(numeroDosParseado)
}
