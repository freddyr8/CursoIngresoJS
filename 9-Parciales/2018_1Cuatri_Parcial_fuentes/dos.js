function mostrar()
{
    //Variables
    var nombre;
    var localidad;

    //Obtener datos por ID
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    //Respuesta
    alert("Usted es " + nombre + " y vive en la localidad " + localidad);


}
