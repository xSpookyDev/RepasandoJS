class Persona{
       public nombre:string;
       private apellido:string;
    
    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getApellido():string{
        return this.apellido;
    }

    static metodoEstatico(){
        return 10;
    }
}

let persona1 = new Persona("Juan", "davila")

console.log(persona1.nombre ,persona1.getApellido());
console.log(Persona.metodoEstatico())