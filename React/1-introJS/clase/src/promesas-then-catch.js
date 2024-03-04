import {invoiceById} from './data/invoices'

//asincronia


const buscarInvoicebyId=(id)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout (()=>{        
            const result = invoiceById(id);
    
            if(result){
                resolve(result)
            }else{
                reject("Error: no se encuentra la factura")
            }
                                        
          
        }, 2500);
    });

    return promise
}

buscarInvoicebyId(2)
.then(console.log)
.catch(console.error)

/*
promise.then((json)=>{
      console.log(json)
    console.log("realizada la tarea con exito")
}).catch((error)=>{
    console.warn(error);
})
*/

