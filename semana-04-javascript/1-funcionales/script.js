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


let puntuacionesTotales = [];
let equiposSumaPuntos = {}
function puntuacionesMaxMin(array) {

  puntuacionesTotales = array.map(mapper)

function mapper(equipo){

  console.log(equipo.puntos);

  let sumaPuntos = equipo.puntos.reduce((acc,el) => 
    acc + el, 0);
  console.log(sumaPuntos);

  equiposSumaPuntos = {...equipo, puntos:sumaPuntos}
  console.log(equiposSumaPuntos);

  return equiposSumaPuntos;
}
/* console.log(puntuacionesTotales); */

puntuacionesTotales.sort((a, b) => b.puntos - a.puntos)

return `El equipo que mayor puntuación ha conseguido ha sido ${puntuacionesTotales[0].equipo} con ${puntuacionesTotales[0].puntos} puntos y el equipo que menos puntuacion ha obtenido ha sido ${puntuacionesTotales[puntuacionesTotales.length-1].equipo} con ${puntuacionesTotales[puntuacionesTotales.length-1].puntos} puntos`



}

console.log(puntuacionesMaxMin(puntuaciones))





















/* let newPuntuaciones = puntuaciones.map(puntuacionMaxMin(puntuaciones));

console.log(newPuntuaciones);

console.log(puntuaciones)
 */

//recorrer los indices del array para poder entrar en cada uno de ellos

    


/* function puntuacionMaxMin(array){
  for(let i of array){

    // sumar todos los valores de la clave puntos de cada indice
    let sumaPuntos = i.puntos.reduce((acc,el) => acc + el, 0);

    //añadir esa suma a cada clave puntos
    i.puntos=sumaPuntos

  }
  //console.log(puntuaciones)

  //ordenar los indices por su valor en puntos de mayor a menor
 array.sort((a,b) => b.puntos-a.puntos)
  console.log(array);

  //sacar por consolael resultado
 return(array[0].equipo + " es el ganador con un total de " + array[0].puntos + " puntos, y " + array[array.length -1].equipo + " es el perdedor con un total de " + array[array.length -1].puntos + " puntos")
}



console.log(puntuacionMaxMin(puntuaciones)); */

/* function puntuacionMaxMin(array){
  for(let i of array){

    // sumar todos los valores de la clave puntos de cada indice
    let sumaPuntos = i.puntos.reduce((acc,el) => acc + el, 0);

    //añadir esa suma a cada clave puntos
    i.puntos=sumaPuntos

  }
  //console.log(puntuaciones)

  //ordenar los indices por su valor en puntos de mayor a menor
 array.sort((a,b) => b.puntos-a.puntos)
  return array;

  //sacar por consolael resultado
 return(array[0].equipo + " es el ganador con un total de " + array[0].puntos + " puntos, y " + array[array.length -1].equipo + " es el perdedor con un total de " + array[array.length -1].puntos + " puntos")
}
 */
/* 
function puntuacionMaxMin(array){
  let sumaPuntuaciones = [];

  for(let i of array){
    console.log(i);
    sumaPuntuaciones.push(i);
    console.log(sumaPuntuaciones);
    console.log(puntuaciones)
  }

  for(let j of sumaPuntuaciones){
    
    // sumar todos los valores de la clave puntos de cada indice
    let sumaPuntos = j.puntos.reduce((acc,el) => acc + el, 0);
    console.log(sumaPuntos);

    //añadir esa suma a cada clave puntos
    j.puntos=sumaPuntos

  }
  //console.log(puntuaciones)

  //ordenar los indices por su valor en puntos de mayor a menor
 sumaPuntuaciones.sort((a,b) => b.puntos-a.puntos)
 console.log(sumaPuntuaciones);
 console.log(puntuaciones)

  //sacar por consolael resultado
 return(sumaPuntuaciones[0].equipo + " es el ganador con un total de " + sumaPuntuaciones[0].puntos + " puntos, y " + sumaPuntuaciones[sumaPuntuaciones.length -1].equipo + " es el perdedor con un total de " + sumaPuntuaciones[sumaPuntuaciones.length -1].puntos + " puntos")
}

console.log(puntuacionMaxMin(puntuaciones));

console.log(puntuaciones) */


/* let newPuntuaciones=[]
console.log(newPuntuaciones); */
/* 
function puntuacionMaxMin(array){
    let newA = [];
    
    for( let i of array){

      let newObj = {}
      // console.log(i.puntos);

      // sumar todos los valores de la clave puntos de cada indice
      let sumaPuntos = i.puntos.reduce((acc,el) => acc + el, 0);
      // console.log(array);
      // console.log(sumaPuntos);
      // console.log(i.equipo);

      newObj = {equipo:i.equipo,
                puntos: sumaPuntos,}

      // console.log(newObj)

      newA.push(newObj);
      console.log(newA);

    }
    console.log(newA)
    console.log(array);

    //ordenar los indices por su valor en puntos de mayor a menor
    newA = newA.sort((a,b) => b.puntos-a.puntos)

    return (newA[0].equipo + " es el ganador con un total de " + newA[0].puntos + " puntos, y " + newA[newA.length -1].equipo + " es el perdedor con un total de " + newA[newA.length -1].puntos + " puntos");
}

console.log(puntuacionMaxMin(puntuaciones));

 */