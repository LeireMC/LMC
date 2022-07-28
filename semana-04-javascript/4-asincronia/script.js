"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000)) 

console.log(agePromise.then())


async function mensajeEdad(){
    let edad = await agePromise;
    
    let mensajePromesa = new Promise((resolve, reject)=>{
        
        if(edad < 18){
            reject("edad es menor")
        }else if(edad % 2 === 0){
            setTimeout(()=>{resolve("edad es par"), 1000})
        }else if(edad % 2 !== 0){
            setTimeout(()=>{resolve("edad es impar"), 2000})
        }
    })

    mensajePromesa
    .then((res) => {
        console.log(res)
    }).catch((e) => {
        console.error(e)
    })
    

}

mensajeEdad(agePromise);


/* Crea una función que reciba una edad y devuelva una promesa:


Si la edad es menor a 18 la promesa se rechazará inmediatamente con el mensaje "edad es menor".


Si la edad es par, la promesa se resolverá al cabo de un segundo con el mensaje "edad es par".


Si la edad es impar, la promesa se resolverá al cabo de dos segundos con el mensaje "edad es impar".


Fíjate en que en el script.js ya se aporta una promesa que devuelve un número del 0 al 100, pero no sabemos exactamente cuánto tarda.
Para finalizar el ejercicio debes hacer que se muestre por consola el mensaje correspondiente a llamar a la función con la edad que devuelva la promesa. En caso de que sea rechazada, se mostrará de color rojo "Error: " y el mensaje correspondiente. */