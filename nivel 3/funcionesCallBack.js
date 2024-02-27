miFuncion1();
miFuncion2();
function miFuncion1() {
  console.log("funcion1");
}

function miFuncion2() {
  console.log("Mi funcion 2");
}

//funciones de tipo callback

let imp = function imprimir(mensaje) {
  console.log(mensaje);
};

function sumar(op1, op2, funcionCallBack) {
  let res = op1 + op2;
  funcionCallBack(`Resultado: ${res}`);
}

sumar(5, 3, imp);

//llamadas asicronas con uso setTimeout

function miFuncionCallBack() {
  console.log("Saludo asincrono despues de 5 segundos");
}

setTimeout(miFuncionCallBack, 5000); //despues de 5 seg

setTimeout(function () {
  console.log("saludos despues de 3 segundos");
}, 3000);

setTimeout(() => console.log("Hola que tal 10 segundos"), 10000);
