"use strict";


function adivinarNum(){
    let contraseña = Math.floor(Math.random() * (100 +1));
    console.log(contraseña);

    let num = +prompt("Introduce un número del 0 al 100");

    if (num === contraseña){
        alert("¡Enhorabuena, ha ganado!");
    }else{ 
        for(let i=0; i < 4; i++){
            if(contraseña < num){
                alert("El numero introducido es incorrecto, debe ser menor.");
                num = +prompt("Introduce un número del 0 al 100");
            }else if(contraseña > num){
                alert("El numero introducido es incorrecto, debe ser mayor.");
                num = +prompt("Introduce un número del 0 al 100");
            }else if(contraseña === num){
                alert("¡Enhorabuena, ha ganado!");
                
            }
        }alert("Lo sentimos, ha perdido");
    }
}


adivinarNum();


/* Edita el archivo script.js para crear una función que haga lo siguiente:

Generar una contraseña (número entero aleatorio del 0 al 100)
Pedir al usuario que introduzca un número dentro de ese rango*.
Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje indicando que ha ganado; si no, el mensaje indicará si la contraseña en un número mayor o menor al introducido y dará una nueva oportunidad.
El usuario tendrá 5 oportunidades de acertar, si no lo consigue, aparecerá un mensaje indicando que ha perdido.


Para pedir datos al usuario utiliza la función prompt:


const numUser = prompt("Introduce un número del 0 al 100");


¡OJO! Prompt siempre devuelve un string. */