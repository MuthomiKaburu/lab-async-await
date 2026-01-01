// Write your code here!
function displayPosts(posts){
    const postList = document.querySelector("#post-list");
    posts.forEach(post => {
        const listItem = document.createElement("li");
        const title = document.createElement("h1");
        const body = document.createElement("p");

        title.textContent = post.title;
        body.textContent = post.body;

        listItem.appendChild(title);
        listItem.appendChild(body);
        postList.appendChild(listItem);
        
    });


}

async function houseFetch(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        displayPosts(posts)
        
    } catch (error) {
        console.log("error accessing data");
        
    }
}

window.onload = () => houseFetch();
