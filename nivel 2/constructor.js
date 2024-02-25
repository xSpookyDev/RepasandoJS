//Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

let padre = new Persona("ricardo", "Montecinos", "rm@gmail.com");

console.log(padre);

let madre = new Persona("Lynda", "Avila", "lv@gmail.com");

console.log(madre);

padre.nombre = "spooky";
console.log(padre.nombreCompleto());

//formas de crear objetos
let miObjeto = new Object();

let miObjeto2 = {}; //forma breve de crear

let miCadena1 = new String("Hola");
let miCadena2 = "hola";
