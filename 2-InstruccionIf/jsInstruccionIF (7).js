function mostrar()
{
//tomo la edad  
    var edad;
    var estadoCivil;

    //Ingreso de datos por ID
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //Operacion IFF
    if (edad < 18 && estadoCivil != "Soltero") {
        alert("Es muy pequeño para NO ser soltero.");
    }

	


}//FIN DE LA FUNCIÓN