// function users2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => getUsers2(data))
// }

// function getUsers2(data){
//    const ul =document.getElementById('users-list');
//    for(const user of data){
//     const li =document.createElement('li');
//     li.innerText=user.name;
//     ul.appendChild(li)
//    }
    
// }

function users3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getUsers3(data) )
}
function getUsers3(data){
    const ul =document.getElementById('users-list');
    for(const user of data){
        console.log(user.name)
        const li =document.createElement('li');
        li.innerText=user.email
        ul.appendChild(li);
    }

}