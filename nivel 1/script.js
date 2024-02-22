//getElemntBy...
///let saludo = document.getElementById('saludo');
//console.log(saludo);
///let buenas = document.getElementById('buenas');
//console.log(buenas);

//let despedida = document.getElementsByClassName('despedida')
//console.log(despedida);

//let nombreUser= document.getElementById('nombre')
//nombreUser.innerHTML = "ricardo"

let nombreUser = prompt("Ingrese su nombre")
let nombreHtml = document.getElementById('nombre');
nombreHtml.innerHTML = nombreUser

