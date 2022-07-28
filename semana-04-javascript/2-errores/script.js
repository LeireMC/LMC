"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

const dni = "45750651-V"

function validadorDNI(dni){

  try{

    //comprobar que es un string de 10 caracteres
    if(dni.length !== 10){
      throw new Error ("El DNI no tiene una longitud válida");
    }

    //dividir el string en dos
    let arrayDni = dni.split("-");


    //la primera parte son 8 numeros
    let numerosDni = +arrayDni[0];

    if(arrayDni[0].length !== 8 || isNaN(numerosDni)){
      throw new Error ("El DNI no tiene una combinacion de numeros válida");
    }
    
    //la segunda parte es una letra(no es un numero)
    if(!isNaN(arrayDni[1])){
      throw new Error ("El DNI no tiene la letra final");
    }

    let restoDni = numerosDni % 23;
  
    if(letras[restoDni] !== arrayDni[1]){
    
      throw new Error ("El DNI no tiene una letra válida");
    
   }

    console.log("El DNI introducido es válido");

  } catch(e) {
    console.error(e.message);
  }
 
}


validadorDNI(prompt("Introduce tu DNI con el siguiente formato XXXXXXXX-X"))


/* Para ello, lo primero que hay que hacer es obtener el resto de dividir el número entre 23. A continuación, segun el resultado (de 0 a 22), se asigna la letra en este orden: */