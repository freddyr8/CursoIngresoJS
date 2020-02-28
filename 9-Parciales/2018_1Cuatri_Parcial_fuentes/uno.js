function mostrar()
{
    var perimetro;
    var ancho = prompt("Ingrese el ancho");
    var largo = prompt("Ingrese el largo");
    //Parseo de datos
    ancho = parseInt(ancho);
    largo = parseInt(largo);

    //Operacion 
    perimetro = (ancho * 2) + (largo * 2);

    //Respuesta
    alert(perimetro);


    

}
