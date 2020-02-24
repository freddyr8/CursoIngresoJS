/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
 var respuesta;
 var numeroAleatorioUno;
 var numeroAleatorioDos;
 var random;
 var operadorMatematico;
 var respuestaUsuario;
 var temporizador;
 
 function comenzar()
 {
     min = 1;
     max = 11;
     numeroAleatorioUno = Math.floor(Math.random() * (max - min)) + min;
     numeroAleatorioDos = Math.floor(Math.random() * (max - min)) + min;
     console.log(numeroAleatorioUno);
     console.log(numeroAleatorioDos);
     random = Math.floor(Math.random() * (4 - 1)) + 1;
     
     
 
 
     switch (random) {
         case 1:
             operadorMatematico = "+";
              respuesta = numeroAleatorioUno + numeroAleatorioDos;
             break;
         case 2:
             operadorMatematico = "-";
             respuesta = numeroAleatorioUno - numeroAleatorioDos;
             break;
         case 3:
             operadorMatematico = "/";
             respuesta = numeroAleatorioUno / numeroAleatorioDos;
             break;
         case 4:
             operadorMatematico = "*";
             respuesta = numeroAleatorioUno * numeroAleatorioDos;
             break;
     }
     document.getElementById("PrimerNumero").value = (numeroAleatorioUno);
     document.getElementById("Operador").value = (operadorMatematico);
     document.getElementById("SegundoNumero").value = (numeroAleatorioDos);
 
 }//FIN DE LA FUNCIÓN
 
 function Responder()
 {
    respuestaUsuario = document.getElementById("Respuesta").value;
 
     if ( respuestaUsuario == respuesta) {
         alert("Correcto!");
     }else{
         alert("Incorrecto!");
         }

    temporizador = setTimeout(comenzar() , 4000);

 }//FIN DE LA FUNCIÓN
