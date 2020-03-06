function mostrar()
{
    //Variables
    var marca;
    var peso;
    var tempAlmacenamiento;
    var pregunta = true;
    var contadorTempPares = 0;
    var bandera = true;
    var pesoMaximo = 0;
    var pesoMinimo = 0;
    var marcaPesoMaximo = 0 ;
    var contadorProductosBajo0Grados = 0;
    var promedioPeso;
    var contadorProductos = 0;
    var AcumuladorPeso = 0;

    do {
    do {
        //Validacion de datos
        marca = prompt("Ingrese la marca del producto.");

        if (marca == null) {
            break;
        }
        
    } while (!isNaN(marca));

    do {

        peso = prompt("Ingrese el peso del producto(min 1, max 100).");
        
        if (peso == null) {
            break;            
        }
        //Parseo
        peso = parseInt(peso);

    } while (isNaN(peso) || peso < 1 || peso > 100);

    do {
        
        tempAlmacenamiento = prompt("Ingrese la temp de almacenamiento(min -30, max 30).");

        if (tempAlmacenamiento == null) {
            break;
        }
        //Parseo
        tempAlmacenamiento = parseInt(tempAlmacenamiento)

    } while (isNaN(tempAlmacenamiento) || tempAlmacenamiento < -30 || tempAlmacenamiento > 30);
    //Fin de la validacion

    //Contador Punto D

    if (peso > 0 && peso != null) {
        
        AcumuladorPeso += peso;
        contadorProductos++;
        
    }

    //Punto A
    if (tempAlmacenamiento % 2 == 0 && tempAlmacenamiento != 0 && tempAlmacenamiento != null) {
        
        contadorTempPares++;   
    }
    //Punto B y F
    if (bandera == true) {

        bandera = false;
        pesoMaximo = peso;
        pesoMinimo = peso;
        marcaPesoMaximo = marca;
        
    }else{
        if (peso > pesoMaximo) {

            pesoMaximo = peso;
            marcaPesoMaximo = marca;
            
        }
        if (peso < pesoMinimo && peso != null) {

            pesoMinimo = peso;
            
        }
    }

    //Punto C
    if (tempAlmacenamiento < 0) {

        contadorProductosBajo0Grados++;
        
    }

    //Punto D
    if (peso != 0){

        promedioPeso = peso / contadorProductos;

    }else{
        promedioPeso = "No ingreso ningun peso en sus productos.";
    }



    pregunta = confirm("Desea continuar?");
    }while (pregunta == true);

    document.write("La cantidad de temperaturas pares es de: " + contadorTempPares + "<br>");
    document.write("La marca del producto mas pesado es: " + marcaPesoMaximo + "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es de: " + contadorProductosBajo0Grados + "<br>");
    document.write("El promedio del peso de todos los productos es de: " + promedioPeso + "<br>");
    document.write("El producto mas pesado es de: " + pesoMaximo + "kg" + "<br>");
    document.write("El producto mas ligero es de: " + pesoMinimo + "kg" + "<br>");
}
