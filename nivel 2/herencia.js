

class Persona {

  static contadorPersonas = 0;

  static contadorObjetosPersonas =0; //atributo de nuestra clase 

  static get MAX_OBJ(){
    return 5;
  }
  //email = 'asdasd@gmail.com'//atributo de nuestros objetos


  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    this.idPersona= Persona.contadorPersonas++;
    //console.log(`Se incrementa contador:` + Persona.contadorObjetosPersonas);
    if(Persona.contadorPersonas < Persona.MAX_OBJ){
      this.idPersona = ++Persona.contadorPersonas;
    }
    else{
      console.log("Se han superado el maximo de objetos permitidos");
    }
  }

  get nombre() {
    //Acceder a los atributos
    return this._nombre;
  }

  set nombre(nombre) {
    //Modificar el atributo
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    return this.apellido;
  }

  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }

  toString(){
    this.nombreCompleto();
  }

  static saludar(){
    console.log("Saludos desde metodo static")
  }

  static saludar2(persona){
    console.log(persona.nombre)
  }
}


class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //hereda con super() //llama al constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    return (this._departamento = departamento);
  }

  //Sobreescritura (tiene que ser el mismo nombre y mismo parametro)

  nombreCompleto() {
    //return this._nombre + " " + this.apellido + " "+ this._departamento  //forma de ejemplo funcional igual
   // return super.nombreCompleto() + " " + this._departamento;=
   return this.idPersona + " " + this._nombre + " "+ this._apellido;
  }
  toString(){
    return this.nombreCompleto();
  }
}

/* let persona1 = new Persona("Juan", "Peres");
console.log(persona1);

let empleado1 = new Empleado("Ricardo", "Montecinos", "Programacion");

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString())

//persona1.saludar(); no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(empleado1);



//ocupar atributo estatico a traves del nombre de la clase, tambien los hereda las clases hijas
console.log(Persona.contadorObjetosPersonas);

console.log(Empleado.contadorObjetosPersonas)

console.log(persona1.email);
console.log(empleado1.email)

console.log(Persona.email) //no es variable de la clase(estatico)

console.log(Empleado.email) //(undefined) */

let persona1 = new Persona("Juan", "Perez")
let persona2 = new Persona("Roberto", "Sans")
console.log(persona1)

console.log(persona2)

let empleado1 = new Empleado("maria", "jimenes", "sistemas")

console.log(empleado1)

console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ)

Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ) // no se modifica es una constante en la clase 

let persona3 = new Persona("Mariani", "lara")
console.log(persona3)

let persona4 = new Persona("Laura", "QUintero")
console.log(persona4)