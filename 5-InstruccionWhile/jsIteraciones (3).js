function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    var cdor = 0;
    
    while (clave.toLowerCase() != "utn750" ) {
        cdor++;
        if (cdor == 3) {
            break;
            
        }
        clave = prompt("Error! ingrese el número clave.");
        console.log(cdor);
    }
}//FIN DE LA FUNCIÓN
