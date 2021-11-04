
async function createComment(event) {
    event.preventDefault();

    const body = document.querySelector("#post-body").value.trim();
    console.log(body);

    if (body) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ body }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(body)
        if (response.ok) {
            console.log(response)
            window.location.replace("/")
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector("#create-post-btn")
    .addEventListener("click", createComment);

//star
async function fetchCommentsJSON() {
    const response = await fetch('/api/comments');
    const comments = await response.json();
    // console.log(comments)
    return comments;

}
fetchCommentsJSON().then(comments => {
    comments;
    // console.log(comments[0].commenter)
    // console.log(comments[0].body)
    let emptyArr = []
    for (let i = 0; i < comments.length; i++) {
        var commenter = comments[i].commenter
        var body = comments[i].body


        var appendComments = `<figure>
           <blockquote class="blockquote">
             <p>${body}</p>
          </blockquote>
           <figcaption class="blockquote-footer">
             ${commenter}
           </figcaption>
         </figure>`

        // console.log(appendComments)
        emptyArr.push(appendComments)

    }

    document.getElementById("comments").innerHTML = emptyArr.join(" ")
})








