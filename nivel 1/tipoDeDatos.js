//integer

var i1 = 10;
var i2 = 5;
var i3 = -12;

//document.writeln(i1+", "+i2+","+i3 ,"<br>");

//numeros decimales - flot, double

var d1 = 3123.312;
var d2 = 0.031231e2;// 0.031231 * 10E2 
var d3 = 4321e-3; 

console.log(typeof d1)
//document.writeln(d1+", "+d2+", "+d3+", <br>");

//strings -textos

var s1 = "Ricardo"; 
var s2 = 'Montecinos';
//document.write("Me llamo "+ s1 + " y mi apellido es " + s2 +"<br>");
//document.write(`Insisto mi nombre es ${s1} ${s2}  <br>`);

//caracteres especiales en strings 

//document.write(`La variable con mi nombre es \${s1} <br>`);
//document.write("Hola , \"como\" estas? <br>")

//booleanos --bools 
var b1 = true
var b2 = false

console.log(b1)
console.log(b2)
console.log(typeof b1)
//document.write(b1)

//otros 

var nd1 = undefined; //no hay dato
var nd2 = null // hay dato pero esta vacio
console.log(typeof nd1)
console.log(nd1+nd2)

//typeOf

let miEntero = 10;
console.log(miEntero)
console.log(typeof miEntero)
miEntero = "Hola"
console.log(typeof miEntero)


//Hoisting (Podemos usar una variable y despues declararla)
//var x; //declarar
 x=10;  //inicializar

console.log(x);

//let x;  (Al usar let no aplica el concepto de hoisting)


//constantes (una ves declarada no se puede cambiar la constante)

const Mi_constante = 10; 
//Mi_constante = 312; error
console.log( Mi_constante)

console.log(Math.PI)// constante PI
