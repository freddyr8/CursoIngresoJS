/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
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
    resultado = numeroUnoParseado + numeroDosParseado
	console.log(numeroUnoParseado)
    console.log(numeroDosParseado)

    //resultado
    alert(resultado)

}

