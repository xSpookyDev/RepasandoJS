import {  } from "";

/*
const sayHello= (name = 'pepe', age =0)=>{
    const greeting = `Hola mundo function! ${name}  Edad: ${age}` ;

    return greeting;
}
*/

//const result = sayHello();

//console.log(sayHello('andres', 42));


const sayHello= (name = 'pepe', age =0)=>`Hola mundo function! ${name}  Edad: ${age}` ;

    console.log(sayHello())

const sumar2Numeros =(n1, n2) => n1+ n2 

console.log(sumar2Numeros(2,3))
