"use strict";
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Juan", "davila");
console.log(persona1.nombre, persona1.getApellido());
console.log(Persona.metodoEstatico());

