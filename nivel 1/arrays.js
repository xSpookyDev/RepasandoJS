/* 

let frutas = ["manzana", "kiwi", "platano", "melon", "frutilla", "sandia"];

console.log(frutas);

document.write(frutas[1]);
document.write("<br>"); //
document.write(frutas[3]);
document.write("<br>");
document.write(frutas[5]);


//arrays asociativos

let alumnos = {
    juan : 30,
    matias : 70,
    lucas : 44,
    paula : 55
};

console.log( alumnos);
document.write("<br>");
document.write(alumnos["lucas"]);
document.write("<br>");
document.write(alumnos["matias"]);
document.write("<br>");
document.write(alumnos["paula"])

let lucas = alumnos["lucas"]
document.write("<br>");
let matias = alumnos["matias"]
document.write("<br>");
let juan = alumnos["juan"]
document.write("<br>");
let paula = alumnos["paula"]
document.write("<br>");

let notas = `Juan se saco un ${juan},
matias se saco un ${matias},
paula se saco un ${paula},
lucas se saco un ${lucas}
`
document.write(notas)

*/
let numerosArreglo = [13, 21, 43, 12, 31];
//let numerosArreglo = [];
numerosArreglo[0] = 13;
numerosArreglo[1] = 21;
numerosArreglo[4] = "Hola";

console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`);
console.log(`Elemento 3 - [2]: ${numerosArreglo[3]}`);
console.log(`Elemento 3 - [4]: ${numerosArreglo[4]}`);

//iteracion
console.log(numerosArreglo.length);
for (let i = 0; i < numerosArreglo.length; i++) {
  console.log(numerosArreglo[i]);
}
