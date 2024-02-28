"use strict";
let saludo = "Hola mundo desde TS"; //tsc -w para compilar en tiempo exacto
saludo = "cambio";
let numero;
let cualquiera; //any es si es que no sabes de que tipo va ser la variable
cualquiera = "ramon";
cualquiera = 12;
const PI = 3.14;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}
saludar();
