"use strict";

try {
  let x = 10;
  // miFuncion();
  throw "Mi error";
} catch (error) {
  console.log(error);
} finally {
  console.log("Termina la revision de errores"); //siempre se ejecuta
}

console.log("continuamos");

let resultado = 1;

try {
  x = 10;
  if (isNaN(resultado)) throw "No es un numero";
  else if (resultado === "") throw "es cadena vacia";
  else if (resultado >= 0) throw "valor positivo";
} catch (error) {
  console.log(error);
  //console.log(error.name);
  // console.log(error.message);
} finally {
  console.log("termina revision de errores");
}
