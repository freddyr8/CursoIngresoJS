function mostrar()
{
//tomo la edad  
    var edad

    //Ingreso de datos ID
    edad = document.getElementById("edad").value;

    //Operacion IFF
    if (edad > 17) {
        alert("Mayor de edad");
        //17 a -infinito
        }else{
            if (edad > 13) {
                alert("Adolescente");
                }else{
                    alert("Menor")
                }
        }
}//FIN DE LA FUNCIÓN