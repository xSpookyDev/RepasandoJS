let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 32,
  email: "juan@gmail.com",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
  miFuncion: function () {
    return "Hola k ase";
  },
};

console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.miFuncion());

//creacion object
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido = "Garcia";
persona2.edad = 11;
persona2.direccion = "salar 311";

console.log(persona2.apellido);
console.log(persona2["apellido"]);

/*
//for in 
for (nombrePropiedad in persona){
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad])
};
*/

//agregar o eliminar propiedades
persona.tel = "432123";
persona2.sexo = "masculino";
console.log(persona);
console.log(persona2.sexo);

delete persona2.direccion;

console.log(persona2);

//concatenar cada valor de cada propiedad

console.log(persona.nombre + " ," + persona.apellido);

for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);
