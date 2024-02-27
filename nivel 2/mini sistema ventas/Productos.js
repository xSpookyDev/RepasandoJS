class Producto{

    static contadorProductos =0;

    constructor(nombre, precio){
        this._idProducto= ++ Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProducto (){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this.nombre}, Precio: ${this._precio}`;
    }
}

let producto1 = new Producto("Pantalon",100);
console.log(producto1.toString())
let producto2 = new Producto("Camisa", 50);
console.log(producto2.toString());