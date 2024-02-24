//Procedimiento en js

function saludar(mensaje) {
  console.log(`Mensaje : ${mensaje}`);
}
saludar("Hola");

function sumar(a, b) {
  let resultadoSuma = a + b;
  return resultadoSuma;
}

let argA = 5,
  argB = 7;
let resultado = sumar(argA, argB);
console.log(resultado);

//paso por valor en js

function cambiarValor(parametro) {
  parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);

//paso por referencia en js

function cambiarValor2(parametro) {
  parametro[0] = 20;
}

let arreglo = [10];

console.log(`antes funcion: ${arreglo[0]}`);

cambiarValor2(arreglo);

console.log(`Despues de funcion ${arreglo}`);

//cadenas y funciones en js
//cadenas inmutables, no modifican su valor

function camviarValor3(parametro) {
  parametro = "Adios";
}

let texto = "Hola";
console.log(texto);

camviarValor3(texto);
console.log(texto);

//funcion recursiva

function funcionRecursiva(numero) {
  if (numero == 1) console.log(numero);
  else {
    console.log(numero);
    funcionRecursiva(numero - 1);
  }
}

funcionRecursiva(3);

//Valor absoluto

let numero = -1;
let valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto);
