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

const invoiceById = (id)=> {
    return  invoice.find(i=> i.id === id)
}

export{
    invoice,
    invoiceById
}