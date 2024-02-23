let n1 = 23;
let n2 = 13;
let n3 = "10";
let n4 = 10;
let t1 = n1 >n2; //true
let t2 = n1 != n2; //true
let t3 = n1 == n2; // false

//Operadores verificar 
document.writeln(n1 == n2);//== verificar si es igual el contenido
document.write("<br>");
document.write(n1 != n2);
document.write("<br>");
document.write(n3 === n4); //tres === para verificar igualdad de contenido y tipo de datos
document.write("<br>");
document.write(n3 !== n4); // !== para verificar desigualdad en contenido y tipo de dato 
document.write("<br>");
document.write(n1 > n2);
document.write("<br>");
document.write(n1 < n2);
document.write("<br>");

//operadores de logica
//AND
document.write("<br>");
document.write(true && true) ;//devuelve true si ambos son true, similar al false
document.write("<br>");
document.write(true && false);
document.write("<br>");
document.write(t1 && t2)
document.write("<br>")
document.write("<br>")

//OR
document.write(t1 || t3); //si cualquier valor es true, la variable sera true
document.write("<br>")

//NOT
document.write("<br>")
document.write(!t3) //devuelve lo controraio a la variable, con el "!" al principio de la variable 

document.write("<br>")
document.write("<br>")

document.write(n1 < n2 || n1 > n2) //ejemplo or, da true

//operador de asignacion

let miNumero =10;
console.log(miNumero)

miNumero = 20;

console.log(miNumero);

//operador + = 

miNumero += 5;
console.log(miNumero);

//operador -= 

miNumero -= 3;

console.log(miNumero);

//operador *=

miNumero *= 4;
console.log(miNumero)

//operador  /=

miNumero /= 4;
console.log(miNumero)

//exponente **=

miNumero **=2;
console.log(miNumero)

//ejemplo valor dentro de rango 

let minimo =0, maximo = 5;

let dato = 3;

//revision dentro de rango

let dentroRango = dato >= minimo && dato <= maximo;
console.log(dentroRango)