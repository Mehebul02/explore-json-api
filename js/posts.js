function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))

}
function displayPost(data){
    const postContainer =document.getElementById('post-container');
    for(const users of data){
        console.log(users)
        const div = document.createElement('div')
        div.classList.add('posts')
        div.innerHTML = `<h2>User-${users.id}</h2>
        
        <h5>Post:${users.title}</h5>
        <p>${users.body}</p>`
        postContainer.appendChild(div)
    }
}
loadPost()