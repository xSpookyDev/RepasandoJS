//para importar es necesario que al principio este la palabra clave export al inicio.

import { invoice } from "./data/invoices";


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
export const facturaName = invoice.find(i=> i.name ==='Compra de papeleria')
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


export{
    invoiceClone,
    invoiceClientes,
    invoice

}