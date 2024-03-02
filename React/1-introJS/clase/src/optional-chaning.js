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


//funcion corta para saber si existe un atributo en el objeto
console.log(invoice.company?.name)
console.log(invoice.cliente?.name)
console.log(invoice.cliente?.adress?.street)



/*funcion largar para saber si existe un atributo en el objeto
if(invoice.company != null && invoice.company.name){
    console.log('Perfecto!!!')
}else{
    console.log("no viene la empresa")
}*/
