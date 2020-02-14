function mostrar()
{ 
var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert("Tiene 29 dias");
            break;
        case "Abril":
            alert("Tiene 30 días.");
            break;
        case "Junio":
            alert("Tiene 30 días.");
            break;
        case "Septiembre":
            alert("Tiene 30 días.");
            break;
        case "Noviembre":
            alert("Tiene 30 días.");
            break;
        default:
            alert("Tiene 31 días.");
            break;
    }


}//FIN DE LA FUNCIÓN