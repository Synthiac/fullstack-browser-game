
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

            
            // window.location.replace("/")
            // let nested = document.getElementsByClassName("nested")
            // document.getElementById("comments").removeChild(nested);


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
                    var id = comments[i].id;

                    var appendComments = `<figure class="nested">
                    <blockquote class="blockquote">
                      <p>${body}</p>
                   </blockquote>
                    <figcaption class="blockquote-footer" id="commenter">
                      ${commenter}    
                    </figcaption>
                  </figure>`
                    // console.log(appendComments)
                    emptyArr.push(appendComments)

                }

                document.getElementById("comments").innerHTML = emptyArr.join(" ")
            })
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector("#submitBtn")
    .addEventListener("click", createComment);

//star

async function reloadComments() {
    const response = await fetch('/api/comments');
    const comments = await response.json();
    // console.log(comments)
    return comments;

}
reloadComments().then(comments => {
    comments;
    // console.log(comments[0].commenter)
    // console.log(comments[0].body)
    let emptyArr = []
    for (let i = 0; i < comments.length; i++) {
        var commenter = comments[i].commenter
        var body = comments[i].body
        var id = comments[i].id
        // console.log(id);


        var appendComments = `<figure class="nested">
               <blockquote class="blockquote">
                 <p>${body}</p>
              </blockquote>
               <figcaption class="blockquote-footer" id="commenter">
                 ${commenter}    
               </figcaption>
             </figure>`

        // console.log(appendComments)
        emptyArr.push(appendComments)

    }

    document.getElementById("comments").innerHTML = emptyArr.join(" ")
})

document
    .querySelector("#reloadComments")
    .addEventListener("click", reloadComments);










