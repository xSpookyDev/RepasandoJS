//Funciones
function datosUsuarios() {
  var nombreUsuario = prompt("Ingrese su nombre");
  var apellidoUsuario = prompt("Ingrese apellido");
  document.write(nombreUsuario + " " + apellidoUsuario + "<br>");
}
//llamada a funcion
datosUsuarios();

function pruebaFuncion() {
  var num1 = 3;
  var num2 = 5;
  var suma = num1 + num2;
  document.write("3 + 5 es " + suma + "<br>");
}
pruebaFuncion();

//Funciones con parametros
//llamar por consola
function nombreCompleto(nombre, apellido) {
  let miNombre = `Mi nombre es ${nombre} ${apellido}. <br>`;
  document.write(miNombre);
}

nombreCompleto("Ricardo", "Montecinos");

//Funciones con parametros 2

const autos = function (auto1, auto2) {
  let auto = `El auto 1 es ${auto1} y el auto 2 es ${auto2}. <br>`;
  document.write(auto);
};

autos("Subaru", "chevrolet");

//Funciones Flechas =>

const ropa = (prenda, talla) => {
  let miRopa = `Mi ${prenda} es de talla: ${talla}. <br>`;
  document.write(miRopa);
};

ropa("camisa", "L");

//Funcion FLecha con un parametro
const ojos = (color) => {
  let misOjos = `Mis ojos son ${color}. <br>`;
  document.write(misOjos);
};
ojos("Azul");

//funciones flecha en una sola linea de codigo

const pelo = (color) => document.write(`Mi pelo es de color ${color}. <br>`);

pelo("Cafe");

//funciones callbacks

function musica(instrumento) {
  instrumento("Piano");
}

function mostrarMusica(nombre) {
  //lama a la otra
  document.write(nombre + "<br>");
}
//Ahora la funcion musica() le pasamos como parametros la funcion mostrarMusica()
musica(mostrarMusica);

//Forma 2 de crear callback

function cine(pelicula) {
  pelicula("Harry Poter");
}
cine((mostrar) => document.write(mostrar));
