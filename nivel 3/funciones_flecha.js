let miFuncion = function () {
  console.log("Saludo desde mi funcion");
};

/*const miFuncionFlecha =()=>{
    console.log("saludos desde funcion flecha")
}
*/

//const miFuncionFlecha= ()=> console.log("RIcardo");

//const saludar = () => {
// return "Saludos desde la funcion flecha";
//}

const saludar = () => saludo;

let saludo = "Hola que tal xd";
//miFuncionFlecha();
miFuncion();
console.log(saludar());

const regresaObjeto = () => ({ nombre: "Juan", apellido: "dasdsa" });
console.log(regresaObjeto());

//const funcionConParametros = (mensaje)=> console.log(mensaje);
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("saludos con parametros");

const funcionConParametros2 = (op1, op2) => op1 + op2;

console.log(funcionConParametros2(2, 4));

//funcion setInterval

let reloj = () => {
  let fecha = new Date();
  console.log(
    `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

setInterval(reloj, 1000);
