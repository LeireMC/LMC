"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

/* let namesOk = names

names.splice(1,2)
console.log(names)

names.splice(0,1)
console.log(names)

names.splice(1,1)
console.log(names)

names.splice(5,1)
console.log(names)

console.log(namesOk)

 */


///crear array donde almacenar los nuevos valores
let namesOk = []


function newNames (array){

  ///recorrer los valores del 1º array
  for (let valor of array) {

    ///mirar si ese valor esta en el nuevo array. Si no esta, se añade
    if (namesOk.indexOf(valor) === -1){
      namesOk.push(valor)
      console.log(namesOk)
    }
    
  }return namesOk;
  

}

console.log(newNames(names));

/* 
1. recorrer los valores del array (for of) y mirar donde se encuentra cada elemento(index Of) (como solo saca la primera coincidencia, almaceno en otro array esos indices con esos valores push)

2.Eliminar los valores iguales

devolver el array sin repetidos
*/
/* 
Escribe un código que, partiendo de un array inicial, elimine las strings repetidas del mismo.
Cuando sepas hacer funciones, haz que sea una función que reciba el array como parámetro (y por tanto elimine los lementos repetidos de cualquier array).
** Ejemplo input: **

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];


** Ejemplo output: **

const names = [
  "A-Jay",
  "Manuel",
  "Eddie",
  "Su",
  "Reean",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];
*/