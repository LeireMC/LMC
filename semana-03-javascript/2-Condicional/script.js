"use strict"

let nombre = prompt("¿Cuál es tu nombre?");

let edad = +prompt("¿Cuál es tu edad?");

if( edad <= 12 ){
    console.log("A " + nombre + " le corresponde el descuento infantil (menores de 12).");

}else if( 12 < edad && edad <= 30 ) {
    console.log("A " + nombre + " le corresponde el descuento juvenil (menores de 30).");

}else if ( edad >= 60 ) {
    console.log("A " + nombre + " le corresponde el descuento de juvilados (mayores de 60).");

} else {
    console.log("A " + nombre + " no le corresponde ningún descuento.");
};

