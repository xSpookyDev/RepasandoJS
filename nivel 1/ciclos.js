//ciclo while

let contador = 0,
  repeticiones = 5;

/*
while(contador <= repeticiones){
  console.log(contador++);
}
*/

//ciclo do while

do {
  console.log(contador++);
} while (contador <= repeticiones);

//ciclo for

repeticiones2 = 5;

for (let contador2 = 0; contador2 <= repeticiones2; contador2++) {
  console.log(contador2);
}

//imprimir los primeros 10 numeros de 3 en 3

/*let hola = 1
for( let repeticion =0; hola <= 10; hola+=3){
     hola
}*/

let maximo = 10,
  minimo = -10;
for (let numero = 1; numero <= maximo; numero += 3) {
  console.log(numero);
}

console.log("Decremento 3 en 3");

for (let numero = 1; numero >= minimo; numero -= 3) {
  console.log(numero);
}

//acumulador suma for

let maximo1 = 5,
  acumuladorSuma = 0;

for (let numero = 1; numero <= maximo1; numero++) {
  console.log(`${acumuladorSuma} + ${numero}`);

  acumuladorSuma += numero;
  console.log(acumuladorSuma);
}
console.log(acumuladorSuma);

//acumulador suma while
