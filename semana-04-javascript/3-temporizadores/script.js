"use strict";

/* Crea un programa que imprima cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.
A continuación, crea una función que sea capaz de parar el programa. Dicha función recibirá dos parámetros: un número y una letra (D, H, M o S), que determinarán el tiempo que tardará en ejecutarse. Para que quede más claro, mostrará un aviso de que el programa se ha parado.
** - Extra: ** Haz que el texto se ajuste a singular y plural (ej: 1 minuto / 2 minutos)
** Ejemplo output: ** "Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución".
Nota: Por las propias limitaciones de JavaScript no hace falta que sea totalmnete preciso, puede haber variaciones de 1s. */






function pararPrograma(num, letra){

    let programa = setInterval (tiempo, 5000)

    let seg = 50;

    let min = 19;

    let horas = 0;

    let dias = 0;


    function tiempo(){

    seg+=5;

    if (seg === 60) {
        min++;
        seg = 0;
        
    }
    if (min === 60) {
    horas ++;
    min = 0;

    }
    if (horas === 24) {
        dias ++;
        horas = 0;
        
        }

    console.log(`Han pasado ${dias} ${dias === 1 ? "dia" : "días"}, ${horas} ${horas === 1 ? "hora" : "horas"}, ${min} ${min === 1 ? "minuto" : "minutos"} y ${seg} segundos desde que se ejecutó el programa`);

    switch (letra.toLowerCase()) {
        case "s":
            if(num === seg){
            clearInterval(programa);
            console.log("El programa se ha parado")}
            break;

        case "m":
            if(num === min){
            clearInterval(programa);
            console.log("El programa se ha parado")}
            break;

        case "h":
            if(num === horas){
            clearInterval(programa);
            console.log("El programa se ha parado")}
            break;

        case "d":
            if(num === dias){
            clearInterval(programa);
            console.log("El programa se ha parado")}
            break;
    
        default:
          /*   console.log("Introduce una letra válida(s, m, h, d)"); */
            break;
    };

    
    };
}

pararPrograma(20, "m") 


