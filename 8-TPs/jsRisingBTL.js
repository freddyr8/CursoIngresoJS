/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{ 
    //Punto A
    var edad = prompt("Ingrese su edad(min 18 y max 90 años.)");
    while (edad < 18 || edad > 90 || isNaN(edad)) {

        edad = prompt("Error, ingrese una edad entre 18 y 90 años.");
    }
    document.getElementById("Edad").value = edad;

    //Punto B
    var sexo = prompt("Ingrese su sexo, 'M' para masculino y 'F' para femenino.");
    while (sexo.toUpperCase() != "F" && sexo.toUpperCase() != "M") {

        sexo = prompt("Error, ingrese 'F' o 'M'.");
    }
    document.getElementById("Sexo").value = sexo;

    //Punto C
    var estadoCivil = prompt("Ingrese un numero acorde a su estado civil: 1-Soltero. 2-Casado. 3-Divorciado. 4-Viudo.");
    while (estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil)) {

        estadoCivil = prompt("Error, ingrese un numero del 1 al 4 para definir su estado civil.");        
    }
    document.getElementById("EstadoCivil").value = estadoCivil;

    //Punto D
    var sueldoBruto = prompt("Ingrese su sueldo en bruto(Min: 8000.)");
    while (sueldoBruto < 8000 || isNaN(sueldoBruto)) {

        sueldoBruto = prompt("Error, ingrese un sueldo bruto valido mayor a 8000.");
    }
    document.getElementById("Sueldo").value = sueldoBruto;

    //Punto E
    var numeroDeLegajo = prompt("Ingrese su numero de legajo(4 cifras sin ceros a la izquierda).");
    while (numeroDeLegajo < 1000 || numeroDeLegajo > 9999 || isNaN(numeroDeLegajo)) {

        numeroDeLegajo = prompt("Error, ingrese un numero de legajo valido de 4 cifras sin ceros a la izquierda.");
    }
    document.getElementById("Legajo").value = numeroDeLegajo;

    //Punto F
    var nacionalidad = prompt("Ingrese su nacionalidad siendo: 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados");
    while (nacionalidad.toUpperCase() != "A" && nacionalidad.toUpperCase() != "E" && nacionalidad.toUpperCase() != "N") {

        nacionalidad = prompt("Error, ingrese 'A' (Argentinos), 'E' (Extranjeros), 'N' (Nacionalizados)");
        
    }
    document.getElementById("Nacionalidad").value = nacionalidad;
    
}
