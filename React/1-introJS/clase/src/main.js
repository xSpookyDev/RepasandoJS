
/*forma 1
ttpClient.then(response => {
   // console.log(response) 
   response.json().then(data =>{
    console.log(data)
   })
}) 

httpClient
.then(Response=> Response.json())
.then(data=>console.log(data));
*/


const findAllUsers = async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
   // const data = await response.json();
    const user =await response.json();
    const ul = document.createElement('ul');
    
    user.forEach(user =>{
        const li=document.createElement('li');
        li.innerText= user.name;
        ul.append(li);

        console.log(user.name);
    });
    document.getElementById("root").append(ul)
    
}
//const users=await findAllUsers();
findAllUsers();
//console.log(users)
console.log("hola que tal");