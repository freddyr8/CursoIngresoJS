function mostrar()
{
    //Variables.
    var letra;
    var numero;
    var pregunta = true;
    var contadorNumerosPares = 0;
    var contadorCeros = 0;
    var contadorNumeroimpares = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var numeroMaximo = 0;
    var numeroMinimo = 0;
    var letraMaximo;
    var letraMinimo;
    var bandera = true;
    var promedioPositivos;
    var contadorPositivos = 0;

    
    //Validacion de datos.
    do {
    do {
        letra = prompt("Ingrese una letra");

        if (letra == null) {

            break;
            
        }
    } while (!isNaN(letra));

    do {
        numero = prompt("Ingrese un numero entre el -100 y 100");

        if (numero == null) {

            break;

        }
        numero = parseInt(numero);
        
    } while (isNaN(numero) || numero < -100 || numero > 100);

    //Punto A y B
    if (numero % 2 == 0 && numero !=0) {
         
        contadorNumerosPares++;
    }else{

        contadorNumeroimpares++;
    }
    //console.log(contadorNumerosPares);
    //console.log(contadorNumeroimpares);

    //Punto C
    if (numero == 0) {

        contadorCeros++;
    }//console.log(contadorCeros);

    //Punto D
    if (numero > 0) {

        acumuladorPositivos += numero;
        contadorPositivos++;
        //console.log(acumuladorPositivos);
        //console.log(contadorPositivos);
        
    }else {
    //Punto E
        acumuladorNegativos+= numero;
        //console.log(acumuladorNegativos);
    }
    //Punto F
    if (bandera == true) {

        bandera = false;
        numeroMaximo = numero;
        numeroMinimo = numero;
        letraMaximo = letra;
        letraMinimo = letra;
        
    }else{

        if (numero > numeroMaximo) {

            numeroMaximo = numero;
            letraMaximo = letra;
            console.log(numeroMaximo);
            console.log(letraMaximo);
            
        }
        if (numero < numeroMinimo) {

            numeroMinimo = numero;
            letraMinimo = letra;
            console.log(numeroMinimo);
            console.log(letraMinimo);
        }
    }

    //Punto D promedio
    if (acumuladorPositivos > 0) {

        promedioPositivos = acumuladorPositivos / contadorPositivos;
        
    }else{

        promedioPositivos = "No ingreso numeros positivos";
    }

    
        
    pregunta = confirm("Desea continuar?");
    } while (pregunta == true);


    //Resultados
    document.write("La cantidad de numeros pares ingresados es de: " + contadorNumerosPares + "<br>");
    document.write("La cantidad de numeros impares ingresados es de: " + contadorNumeroimpares + "<br>");
    document.write("La cantidad de ceros ingresados es de: " + contadorCeros + "<br>");
    document.write("El promedio de los numeros positivos ingresados es de: " + promedioPositivos + "<br>");
    document.write("La suma de todos los numeros negativos ingresados es de: " + acumuladorNegativos + "<br>");
    document.write("El numero maximo es: " + numeroMaximo + "<br>");
    document.write("La letra del maximo es: " + letraMaximo + "<br>");
    document.write("El numero minimo es: " + numeroMinimo + "<br>");
    document.write("La letra del minimo es: " + letraMinimo + "<br>");
}
