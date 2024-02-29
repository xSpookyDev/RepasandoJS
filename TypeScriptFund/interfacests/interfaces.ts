interface Usuario{
    nombreUsuario:string;
    password: string;
    confirmarPassword?:string;
}

let usuario1: Usuario ={nombreUsuario: "Juan", password:"12345"};
console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar{
    abordarTransporte():void;


}
let avion:Abordar = {
    abordarTransporte: function (){
        console.log("Abordando");
    }
}

avion.abordarTransporte();