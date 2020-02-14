/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var cantidadLamparasPars;
    var lamparasPrecio;
    var precioDesc;
    var marca;
    var precioFinal;
    var precioFinalDesc;
    var importeFinal;
    var ingresosBrutos;

    lamparasPrecio = 35;

    //Ingresando datos por ID
    cantidadLamparas = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    precioDesc = document.getElementById("precioDescuento").value;

    //Parseo de datos
    cantidadLamparasPars = parseInt(cantidadLamparas);
    
    

    //Operacion IFF
    if (cantidadLamparasPars >= 6) {
        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.5;
        document.getElementById("precioDescuento").value = precioFinalDesc;
    
    }else if (cantidadLamparasPars == 5 && marca == "ArgentinaLuz"){
            
            precioFinal = lamparasPrecio * cantidadLamparasPars;
            precioFinalDesc = precioFinal * 0.4;
            document.getElementById("precioDescuento").value = precioFinalDesc;
    
    }else if (cantidadLamparasPars == 5 && marca != "ArgentinaLuz") {
        
        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.3;
        document.getElementById("precioDescuento").value = precioFinalDesc;
    
    }else if (cantidadLamparasPars == 4 && ("ArgentinaLuz" || "FelipeLamparas")) {
        
        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.25;
        document.getElementById("precioDescuento").value = precioFinalDesc;
    
    }else if (cantidadLamparasPars == 4 != ("ArgentinaLuz" || "FelipeLamparas")) {
        
        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.2;
        document.getElementById("precioDescuento").value = precioFinalDesc;
    
    } else if (cantidadLamparasPars == 3 && "ArgentinaLuz") {

        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.15;
        document.getElementById("precioDescuento").value = precioFinalDesc;

    } else if (cantidadLamparasPars == 3 && "FelipeLamparas") {

        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.1;
        document.getElementById("precioDescuento").value = precioFinalDesc;
        
    } else if (cantidadLamparasPars == 3 != ("ArgentinaLuz" || "FelipeLamparas")) {

        precioFinal = lamparasPrecio * cantidadLamparasPars;
        precioFinalDesc = precioFinal * 0.05;
        document.getElementById("precioDescuento").value = precioFinalDesc;
        
    } else if (importeFinal > 120) {

        importeFinal = precioFinalDesc 

    } else {
        
    }
}
