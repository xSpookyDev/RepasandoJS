//let persona2 = new Persona("karla", "Davil"); // la clase persona no a sido definida (MALO)

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    //Acceder a los atributos
    return this._nombre;
  }

  set nombre(nombre) {
    //Modificar el atributo
    this._nombre = nombre;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre);

persona1.nombre = "Ricardo";

console.log(persona1);
/*console.log(persona1)

let persona2 = new Persona("Carlos", "lara")
console.log(persona2)
*/
