"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];
/* 
console.log(catalogo[0] + " y " +  catalogo[1]); */

function combinaciones(catalogo) {

  let catalogoA = [...catalogo];
  let catalogoB = [...catalogo];

/*   console.log(catalogoA);
  console.log(catalogoB); */

  for (let i = 0; i < catalogoA.length ; i++){
/*     console.log(catalogoA[i]); */
       catalogoB.shift();
    /* console.log(catalogoB.shift()); */
/*     console.log(catalogoB)
    console.log(catalogoA.length) */
    for (let j = 0; j < catalogoB.length ; j++){
/*       console.log(catalogoB[j]); */
      console.log(catalogoA[i] + " y " + catalogoB[j]);
    }
  }


 return;
    
}

combinaciones(catalogo);

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