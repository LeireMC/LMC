"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};


/* for (let key in people){
  console.log(people[key]);

  if(people[key] >= 18){
    console.log( key + " es mayor de edad")
  }else{
    console.log(key + " es menor de edad")
  }

} */


function esMayorEdad(objeto){

  for (let key in objeto){
    
    if(objeto[key] >= 18){
      console.log( key + " es mayor de edad")
    }else{
      console.log(key + " es menor de edad")
    }
    
  }
  return;
}

  
esMayorEdad(people);





/* Partiendo de un objeto que incluye una serie de personaas con sus respectivas edades, saca por consola un mensaje por cada persona que diga "Nombre es mayor de edad" o "Nombre es menor de edad", según corresponda.
Cuando sepas hacer funciones, haz que sea una función que reciba el objeto como parámetro.
** Ejemplo input: **

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};


** Ejemplo output: **

"Maria es mayor de edad";
"Ana es menor de edad";
"Luis es menor de edad";
"Pepe es mayor de edad";
"Manuel es mayor de edad";
"Teresa es menor de edad";
"Daniel es mayor de edad";
"Irene es mayor de edad";
"Alex es menor de edad"; */