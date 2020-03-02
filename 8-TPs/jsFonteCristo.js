/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
           //Punto A
        if (numero % 2 == 0) {

            contadorNumerosPares++;
        }else if(numero % 2 !== 0){
            //Punto B
            contadorNumeroimpares++;
            console.log(contadorNumeroimpares);
            console.log(contadorNumerosPares);

        }else if (numero == 0) {
            //Punto C
            contadorCeros++;
            console.log(contadorCeros);

        }else if (numero > 0) {
            //Punto D
            acumuladorPositivos += numero;
            contadorPositivos++;
            console.log(acumuladorPositivos);
            console.log(contadorPositivos);
            
        }else if (numero < 0) {
            //Punto E
            acumuladorNegativos += numero;
            console.log(acumuladorNegativos);
            

        }else if (bandera == true) {
            //Punto F
            bandera = false;
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaximo = letra;
            letraMinimo = letra;
            
        }else if (numero > numeroMaximo) {

            numeroMaximo = numero;
            letraMaximo = letra;
            console.log(numeroMaximo);
            console.log(letraMaximo);
            
        }else if (numero < numeroMinimo) {

            numeroMinimo = numero;
            letraMinimo = letra;
            console.log(numeroMinimo);
            console.log(letraMinimo);
            
            //Punto D
        }if (acumuladorPositivos > 0) {

            promedioPositivos = acumuladorPositivos / contadorPositivos;
            
        }else {
            promedioPositivos = "No ingreso ningun positivo.";
        }
 	
}
