function loadPhots(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayLoad(data))
}

function displayLoad(data){
    console.log(data);

}