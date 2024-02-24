//sentencia if
let miNumero = 10;

/*  revisar si el numero es positivo: 
if (miNumero > 0){
    console.log(`Valor positivo ${miNumero}`);
}
else if ( miNumero ==0){
    console.log(`Valor cero  ${miNumero}`);
}
else{
    console.log(`Valor negativo ${miNumero}`)
}
*/

//operador ternario

miNumero > 0 ? console.log(`Positivo`) : console.log(`Negativo `);

//algoritmo es mayor de edad

const edad_adulto = 18;
const edad_persona = 19;

if (edad_persona >= edad_adulto) {
  console.log(`La persona es mayor de edad`);
} else {
  console.log(`La persona es menor de edad`);
}

edad_persona >= 18
  ? console.log("mayor de edad")
  : console.log(`Es menor de edad`);

//algoritmo dia de la semana

let diaSemana = 4;

if (diaSemana == 1) {
  console.log(`Es lunes`);
} else if (diaSemana == 2) {
  console.log(`Es martes`);
} else if (diaSemana == 3) {
  console.log(`Es miercoles`);
} else if (diaSemana == 4) {
  console.log(`Es jueves`);
} else if (diaSemana == 5) {
  console.log(`Es viernes`);
} else if (diaSemana == 6) {
  console.log(`Es sabado`);
} else if (diaSemana == 7) {
  console.log(`Es domingo`);
} else {
  console.log(`Ingrese un dato valido ${diaSemana}`);
}

//sentencia switch

switch (diaSemana) {
  case 1:
    console.log("Es lunes");
    break;
  case 2:
    console.log("Es martes");
    break;
  case 3:
    console.log("Es miercoles");
    break;
  case 4:
    console.log("Es jueves");
    break;
  case 5:
    console.log("Es viernes");
    break;
  case 6:
    console.log("Es sabado");
    break;
  case 7:
    console.log("Es domingo");
    break;
  default:
    console.log(`Dia semana erroneo ${diaSemana}`);
}
