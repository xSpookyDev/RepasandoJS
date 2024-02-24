//contar caracteres

var ejemplo = "Ricardo";
var longitud = ejemplo.length;
document.writeln(
  "La cantidad de letras de la palabra es: " + longitud + "<br>"
);

//reemplazar

var texto = "Buenas tardes! <br>";
var textoRemp = texto.replace("tardes", "Noches ");
document.writeln(texto);
document.write(textoRemp);

//Reemplazar todos los iguales

var texto2 = "Buenas tardes, que tengas buenas tardes! <br>";
var texto2Remp = texto2.replace(/tardes/g, "noches"); // /g hace que sea global en todas las palabras iguales
document.write(texto2);
document.write(texto2Remp);

//Extraer parte slice()

var autos = "Ford, Audi, Mini <br>";
var unAuto = autos.slice(6, 10);
var unAuto2 = autos.slice(11, 17);
var unAuto3 = autos.slice(0, 4);

document.write(unAuto);
document.write(unAuto2);
document.write(unAuto3 + "<br>");

//Extraer negativos

var colores = "Rojo, Amarillo, Verde <br>";
var colorNeg = colores.slice(-10, -5);

document.writeln(colorNeg + "<br>");

//Extraer parte 1 parametro
var instrumento = "Guitarra, Piano, Bajo, Violin";
var cortarInstrumento = instrumento.slice(10);

document.writeln(cortarInstrumento + "<br>");

//Extraer parte subtr()

var frutas = "Manzana, Banana, Mandarina";
var parteFruta = frutas.substring(16, 9);

document.writeln(parteFruta + "<br>");

//Convertir a mayusculas

var txt = "Hola Que tal<br>";
var Mayus = txt.toUpperCase();

document.writeln(txt);
document.writeln(Mayus);

//Convertir a minuscula

var txt = "Hola Que tal<br>";
var Mayus2 = txt.toLowerCase();

document.writeln(Mayus2);

//Concatenar

var hola = "Hola";
var mundo = "mundo";
var holaMundo = hola.concat(" " + mundo);

document.writeln(holaMundo);
