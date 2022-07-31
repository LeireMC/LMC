"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


function combinaciones(array){
const newCatalogo=[];

for (let i=0; i < array.length; i++){
  // console.log(array[i]);
  for (let j = i + 1; j < array.length; j++){
  // console.log(array[j]);
  newCatalogo.push(`${array[i]} y ${array[j]}`)
  // console.log(newCatalogo)
}

}
return newCatalogo;

}

console.log(combinaciones(catalogo));




/* function combinaciones(catalogo) {

//crear dos arrays nuevos que voy a combinar entre ellos
  let catalogoA = [...catalogo];
  let catalogoB = [...catalogo];
  let newArray = []


//recorrer los indices del catalogoA
  for (let i = 0; i < catalogoA.length ; i++){
    // console.log(catalogoA[i]);

//quitar en cada vuelta del catalogoB el valor de ese i 
       catalogoB.shift();
    // console.log(catalogoB.shift());
    // console.log(catalogoB)
    // console.log(catalogoA.length)

//recorrer los indices del catalogoB una vez habiendo quitado el valor del indice del catalogoA
    for (let j = 0; j < catalogoB.length ; j++){
      // console.log(catalogoB[j]);

//sacar por consola los valores de las posiciones en cada vuelta
      console.log(catalogoA[i] + " y " + catalogoB[j]);

      newArray.push(catalogoA[i] + " y " + catalogoB[j])
    }
  }


 return newArray;
    
}

console.log (combinaciones(catalogo)); */

 /*  console.log(catalogo[i] + " y " +  catalogo[i + 1]); */
  // 0+1, 1+2, 2+3, 3+4, 4+5
  // 0+2, 1+3, 2+4, 3+5
  // 0+3, 1+4, 2+5
  // 0+4, 1+5
  // 0+5


/* 
0+1   
0+2
0+3
0+4
0+5

console.log(array[1]+)


1+2
1+3
1+4
1+5

2+3
2+4
2+5

3+4
3+5

4+5

*/

/* Una pizerría ofrece pizzas "mitad y mitad".
Cada mitad debe corresponderse a una pizza de su catálogo, pero éste cambia constantemente, por lo que el número de combinaciones posibles, también.
Escribe una función que reciba el catálogo de pizzas (un array de strings) y devuelva una lista de las combinaciones.
Seguramente en tu primera aproximación devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa, barbacoa y carbonara) pero ¡son la misma pizza!
De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no sería una combinación, sino una pizza normal.
¿Serías capáz de solucionar eso, sin añadir ninguna línea de código? ¡Es más fácil de lo que puede parecer!
Ejemplo input:

[
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];




Ejemplo output:

[
  "margarita y cuatro quesos",
  "margarita y prosciutto",
  "margarita y carbonara",
  "margarita y barbacoa",
  "margarita y tropical",
  "cuatro quesos y prosciutto",
  "cuatro quesos y carbonara",
  "cuatro quesos y barbacoa",
  "cuatro quesos y tropical",
  "prosciutto y carbonara",
  "prosciutto y barbacoa",
  "prosciutto y tropical",
  "carbonara y barbacoa",
  "carbonara y tropical",
  "barbacoa y tropical",
]; */