function mostrar()
{
    //Variables
    
    var notas;
    var sexo;
    var contador = 0;
    var promedio = 0;
    var acumuladorDeNotas = 0;
    var notaMinima = 0;
    var notaMaxima = 0;
    var primeraVez = true;
    var sexoDeNotaBaja;
    var contadorVarones = 0 ;


    while (contador < 5) {
        contador++;

        //Validar datos
        do {
            var notas = prompt("Ingrese la nota del alumno");

            if (notas == null) {
                break; 
            }

            notas = parseInt(notas);

             
        } while (isNaN(notas) || notas < 0 || notas > 10);
        
        do {
            var sexo = prompt("Ingrese el sexo del alumno");
            
            if (sexo == null) {
                break; 
            }

        } while (!isNaN(sexo) || sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m" );
        
        //Punto A
        acumuladorDeNotas += notas;

        //Punto B
        if (primeraVez) {

            primeraVez = false;
            notaMinima = notas;
            sexoDeNotaBaja = sexo;

        }else{
            if (notas < notaMinima) {

                notaMinima = notas;
                sexoDeNotaBaja = sexo;  
            }
        }

        //Punto C
        if (notas >= 6 && sexo == "m") {
            
            contadorVarones++;

        }
    }

    if (acumuladorDeNotas > 0) {

        promedio = acumuladorDeNotas / 5;
        
    }else {
        promedio = "No ingreso ningun producto.";
    }
   

    document.write("El promedio de las notas es: " + promedio +  "<br>");
    document.write("La nota mas baja es: " + notaMinima +  "<br>");
    document.write("El sexo de la persona con la nota mas baja es: " + sexoDeNotaBaja +  "<br>");
    document.write("Varones con nota mayor a 6: " + contadorVarones +  "<br>");
}


