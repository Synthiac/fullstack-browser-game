
async function createComment(event) {
    event.preventDefault();

    const title = document.querySelector("#post-body").value.trim();
    const body = document.querySelector("#post-title").value.trim();


    if (body) {
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({
                title,
                body,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
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
    console.log(comments)
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








