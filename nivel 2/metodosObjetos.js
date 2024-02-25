let persona = {
  //get en objeto persona
  nombre: "Juan",
  apellido: "Perez",
  edad: 32,
  email: "juan@gmail.com",
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase(); //funcion que lo devuelve en mayuscula
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido; //el metodo get lo permite llamar sin los ()
  },
  miFuncion: function () {
    return "Hola k ase";
  },
};

console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = "us";

console.log(persona.lang);
