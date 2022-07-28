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