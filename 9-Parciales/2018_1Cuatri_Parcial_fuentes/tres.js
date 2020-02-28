function mostrar()
{
    //Variables
    var precio = prompt("Ingrese el precio");
    var descuento = prompt("Ingrese el porcentaje del descuento");
    var precioDescuento;
    var precioFinal;

    //Operacion
    precioDescuento = precio * descuento / 100;
    precioFinal = precio - precioDescuento;

    //Respuesta
    document.getElementById("elPrecioFinal").value = precioFinal;

}
