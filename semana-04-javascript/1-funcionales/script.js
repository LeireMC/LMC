"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];


/* let newPuntuaciones = puntuaciones.map() */


//recorrer los indices del array para poder entrar en cada uno de ellos

    


function puntuacionMaxMin(array){
  for(let i of array){

    // sumar todos los valores de la clave puntos de cada indice
    let sumaPuntos = i.puntos.reduce((acc,el) => acc + el, 0);

    //añadir esa suma a cada clave puntos
    i.puntos=sumaPuntos

  }
  /* console.log(puntuaciones) */

  //ordenar los indices por su valor en puntos de mayor a menor
 array.sort((a,b) => b.puntos-a.puntos)
  console.log(array);

  //sacar por consolael resultado
 return(array[0].equipo + " es el ganador con un total de " + array[0].puntos + " puntos, y " + array[array.length -1].equipo + " es el perdedor con un total de " + array[array.length -1].puntos + " puntos")
}
/* 
console.log(puntuacionMaxMin(puntuaciones)); */


console.log(puntuacionMaxMin(puntuaciones));