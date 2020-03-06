function mostrar()
{
    //Variables.
    var pregunta = true;
    var pais;
    var habitantes;
    var temperatura;
    var contadorTempPar = 0;
    var bandera = true;
    var paisMenosHab = 0;
    var tempMinima = 0;
    var paisTempMinima = 0;
    var menorCantidadHabitantes = 0;
    var contadorPaises40Grados = 0;
    var acumuladorHabitantes = 0;
    var contadorPaises = 0;
    var promedio;

    //Validar datos.
    do {
    do {
        pais = prompt("Ingrese el nombre del pais.");

        if (pais == null) {
            break;
        }
        
    } while (!isNaN(pais) || pais == "");

    do {
        habitantes = prompt("Ingrese cantidad de habitantes");

        if (habitantes == null) {
            break;
        }
        habitantes = parseInt(habitantes);
        
    } while (isNaN(habitantes) || habitantes < 1 || habitantes > 7000 || habitantes == 0);

    do {
        temperatura = prompt("Ingrese temperatura registrada en el territorio");

        if (temperatura == null) {
            break;
        }
        temperatura = parseInt(temperatura);

    } while (isNaN(temperatura) || temperatura < -50 || temperatura > 50);

    //Punto A
    if (temperatura % 2 == 0) {
        contadorTempPar++
        //console.log(contadorTempPar);
    }

    //Punto B y F
    if (bandera == true) {
        bandera = false;
        paisMenosHab = pais;
        menorCantidadHabitantes = habitantes;
        tempMinima = temperatura;
        paisTempMinima = pais;
    }else{
        if (temperatura < tempMinima) {
            tempMinima = temperatura;
            paisTempMinima = pais;
        }
        if (habitantes < menorCantidadHabitantes) {
            paisMenosHab = pais;
        }
    }
    console.log("temp minima: " + tempMinima);
    console.log("pais temp mini: " + paisTempMinima);
    console.log("pais menos hab: " + paisMenosHab);
    //Punto C
    if (temperatura > 40) {
        contadorPaises40Grados++;
    }

    //Punto D
    acumuladorHabitantes += habitantes;
    contadorPaises++;

    if (acumuladorHabitantes != 0) { 

    promedio = acumuladorHabitantes / contadorPaises;

    }else{
        promedio = "No ingreso habitantes.";
    }   

    pregunta = confirm("Desea continuar ingresando?"); 
 } while (pregunta == true);

 document.write("La cantidad de temperaturas pares es: " + contadorTempPar + "<br>");
 document.write("El nombre del pais con menos habitantes es: " + paisMenosHab + "<br>");
 document.write("La cantidad de paises que superan los 40 grados son : " + contadorPaises40Grados + "<br>");
 document.write("El promedio de habitantes entre los paises ingresados es: " + promedio + "<br>");
 document.write("La temperatura minima ingresada fue: " + tempMinima + "<br>");
 document.write("El pais al cual pertenece la temperatura minima ingresada es: " + paisTempMinima + "<br>");






}
