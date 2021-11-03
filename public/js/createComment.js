// async function createPost(event) {
//     event.preventDefault();

//     const title = document.querySelector("#comment_title").value.trim();
//     const body = document.querySelector("#comment-body").value.trim();

//     if (body) {
//         const response = await fetch("api/comments", {
//             method: "POST",
//             body: JSON.stringify({
//                 title,
//                 body,
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//         if (response.ok) {
//             console.log(response)
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document
//     .querySelector("#createPostBtn")
//     .addEventListener("click", createPost);