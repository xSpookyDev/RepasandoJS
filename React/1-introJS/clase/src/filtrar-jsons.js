

const invoice = [
    {
    id: 1,
    name: 'Compra de oficina',
    date: new Date(),
    cliente: {
        
        name: "jon",
        lastName: "Doe",
        
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
   
},
{
    id: 2,
    name: 'Compra de computacion',
    date: new Date(),
    cliente: {
        
        name: "jon",
        lastName: "Doe",
        
    },
    items:[
        {
            producto: 'keyboard',
            price: 321,
            quantity: 2,
        },
        {
            producto: 'monitor',
            price: 200,
            quantity: 1
        },
        {
            producto: 'ruler',
            price: 200,
            quantity: 10
        }
    ],
   
},
{
    id: 3,
    name: 'Compra de papeleria',
    date: new Date(),
    cliente: {
        
        name: "jonas",
        lastName: "Doe",
        
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
            producto: 'paper',
            price: 200,
            quantity: 10
        }
    ],
   
}
];

const invoiceClone = invoice.map(i =>{
    return i.name;
})

console.log(invoiceClone)

const invoiceClientes = invoice.map(i =>{
    return i.cliente.name;
})

console.log(invoiceClientes)


//find buscar por algo
//const factura = invoice.find(i=> i.id ===3)
const facturaName = invoice.find(i=> i.name ==='Compra de papeleria')
console.log(facturaName)

//filter
//filtrado por id menor o igual a 1
const filtroInvoice = invoice.filter(i=> i.id <=1)
console.log(filtroInvoice)

const filtroObjeto = invoice.filter(i=> i.items.includes({
    producto: 'paper',
    price: 200,
    quantity: 10
}))

console.log(filtroObjeto)

const invoiceDeleted = invoice.filter(i=> i.id >2)
console.log(invoiceDeleted)