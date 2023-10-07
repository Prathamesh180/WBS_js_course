
const URL = "https://jsonplaceholder.typicode.com/comments?postId=1"

// Fetching data from api
/*
fetch(URL)
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data.map(ele => ele.name))
})
*/

async function dostuff(){
    // const response = await fetch(URL, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body : JSON.stringify({
    //         title: "New post"
    //     })
    // })
    // const post = await response.json()
    // console.log(post)

    const response = await fetch(URL)
    const comments = await response.json()
    console.log(comments);
    // comments.map(comment => console.log(comment))
}

dostuff()