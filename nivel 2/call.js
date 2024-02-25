let persona1 = {
  nombre: "juan",
  apellido: "perez",
  nombreCompleto: function (titulo, tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
  },
};

let persona2 = {
  nombre: "carlos",
  apellido: "lara",
};

//uso de call para usar el metodo nombre completo con los datos del persona2

console.log(persona1.nombreCompleto("Developer", "94314141"));

console.log(persona1.nombreCompleto.call(persona2, "ingeniero", "321312"));
