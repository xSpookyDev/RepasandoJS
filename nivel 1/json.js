let personas1 = {
 nombre : "Sebastian",
 apellido : "Martines",
 edad : 34,
 pais : "Chile"
};

console.log(personas1)

document.write(personas1.nombre)
document.write("<br>");
document.write(personas1.apellido)
document.write("<br>");
document.write(personas1.pais)
document.write("<br>");
personas1.nombre = "Ricardo";
document.write(personas1.nombre)


let personas2 = [
    {
        nombre : "jorge",
        apellido : "perez",
        edad : 40,
        pais : "chile"

    },
    {nombre: "Richard",
    apellido: "Montecinos", 
    edad: 24,
    pais: "Chile"}
]

console.log(personas2)
console.log(personas2[1])

