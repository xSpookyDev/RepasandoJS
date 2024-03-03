
//destructurar objetos
const user = {
    username: "ricardo",
    email: "ricardo@gmail.com",
    age:24,
    ranking: 9,

}

//const username = user.username;
//const ranking = user.ranking;
//const age = user.age;


const {username, ranking, age} =user; //usado mas en react
console.log(username);
console.log(ranking);
console.log(`${username} con el ranking: ${ranking} tiene ${age} años`);



//funcion 
const detail = ({username, email})=>{
   
    console.log(`El detalle del usuario ${username} con correo ${email}`)
}

detail(user)


//destructurar arreglo
const user2 =['pepe', 'ana','maria', 'juan', 'sebastian', 'camila', 'josefa'];

const [pepe, a, maria, ...jose] = user2;

console.log(pepe, a, ...jose)

