"use strict";
let suma = function (a, b) {
    return a + b;
};
console.log(suma(32, 432));
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(3, 2));
var obtenerNombre = function () {
    return "Juan Perez";
};
let obtenerNombreFlecha = () => "Juan Perez";
