const invoice = {
    id: 10,
    name: 'Compra de oficina',
    date: new Date(),
    cliente: {
        id:2,
        name: "jon",
        lastName: "Doe",
        age:32,
    },
    items:[
        {
            producto: 'keyboard',
            price: 321,
            quantity: 2,
        },
        {
            producto: 'Mouse',
            price: 200,
            quantity: 1
        },
        {
            producto: 'ruler',
            price: 200,
            quantity: 10
        }
    ],
    total: function(){
        
          let  total = 0;
           this.items.forEach(item =>{
            total = total +item.price * item.quantity
           });
        return total;
    },
    greeting: function(){
        return `Hola ${this.cliente.name}`;
    }
};

const invoice2 = {...invoice}; 

const result = invoice == invoice2;

if(result) {

    console.log(result)
}
else {
    console.log("No son iguales")
}

invoice2.id = 20;

console.log(invoice.id)
console.log(invoice2.id)