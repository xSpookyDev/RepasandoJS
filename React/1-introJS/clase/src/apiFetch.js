const httpClient= fetch("https://jsonplaceholder.typicode.com/users")

/*forma 1
ttpClient.then(response => {
   // console.log(response) 
   response.json().then(data =>{
    console.log(data)
   })
}) */

httpClient
.then(Response=> Response.json())
.then(data=>console.log(data));

console.log("hola que tal");