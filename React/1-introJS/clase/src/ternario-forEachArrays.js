const average= 5.9;
const status2 = (average>= 5.5)? 'Aprobado': 'rechazado';
console.log(  `Resultado: ${status2}`)


let max = 0;
const a = 5; 
const b= 8;
const c = 3;

max= a >b ? b: b;
max = max > c ? max : c;


console.log(`El numero mayor es ${max}`)




const products = ["mesa", "sillas", "notebook", "casas"];

products.push("pantalla led", "sony tv");

const fruits = ["peras", "manzana", "sandias"]

const mercado = [...fruits, ...products, ];



console.log(mercado)

console.log(products)

//products.forEach(el=>console.log(el))
products.forEach(console.log)

for(const produ of products){
    console.log(produ)
}


for (let i = 0; i < products.length; i++) {
   const elment = products[i];
   console.log(Element)
}
