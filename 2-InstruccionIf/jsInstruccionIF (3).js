function mostrar()
{
//tomo la edad  
    var edad;

    //Ingreso de datos por ID
    edad = document.getElementById("edad").value;

    //Operacion IFF
    if(edad >= 18) {
        alert("Mayor de edad");
    }else{
        alert("Menor de edad");
    }
}//FIN DE LA FUNCIÓN