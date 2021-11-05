// Get the modal
var loginModal = document.getElementById("loginModal");

// Get the button that opens the modal
var modalOpen = document.getElementById("homeButton");

// Get the <span> element that closes the modal
var modalClose = document.getElementById("close");

// When the user clicks on the button, open the modal
modalOpen
    .addEventListener("click", function () {
        loginModal
            .setAttribute("style", "display: block")
    });


// When the user clicks on <span> (x), the modal closes
if (document.getElementById("close")) {
    document
        .getElementById("close")
        .addEventListener("click", function () {
            loginModal
                .setAttribute("style", "display: none")
        });
};

// When the user clicks anywhere outside of the modal, it closes
window.addEventListener("click", function (event) {
    if (event.target == loginModal) {
        loginModal
            .setAttribute("style", "display: none");
    };
});



if (document.getElementById("signUpDiv")) {
    document
        .getElementById("signUpDiv")
        .addEventListener("click", function () {
            document
                .getElementById("signUpForm")
                .setAttribute("style", "display: flex");
            document
                .getElementById("signupBtn")
                .setAttribute("style", "display: flex");
            document
                .getElementById("signInForm")
                .setAttribute("style", "display: none");
                document
                .getElementById("loginBtn")
                .setAttribute("style", "display: none");
        });
};



if (document.getElementById("signInDiv")) {
    document
        .getElementById("signInDiv")
        .addEventListener("click", function () {
            document
                .getElementById("signInForm")
                .setAttribute("style", "display: flex");
            document
                .getElementById("loginBtn")
                .setAttribute("style", "display: flex");
            document
                .getElementById("signUpForm")
                .setAttribute("style", "display: none");
                document
                .getElementById("signupBtn")
                .setAttribute("style", "display: none");
        });
};


async function loginForm(event) {
    event.preventDefault();
    //inputs i need for login
    const username = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    //make sure these have content
    if (username && password) {
        //fetch from my route
        const response = await fetch("/api/users/", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log("Logged in successfully!");
            console.log(JSON.stringify(username))
            loginModal.setAttribute("style", "display: none")
            //appending username to page
            let displayUser = document.createElement("div")
            displayUser.innerHTML = JSON.stringify(username)
            displayUser.setAttribute("style", "color: var(--lime)")
            document.getElementById("navbarSupportedContent").appendChild(displayUser)

            document.querySelector("#email-login").value = ""
            document.querySelector("#password-login").value = ""


            // document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}


async function signupForm(event) {
    event.preventDefault();

    const username = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users/create", {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        console.log(username, email, password);

        if (response.ok) {
            console.log(response);
        } else {
            alert(response.statusText);
        }
    }
    // login / signup same time
    const responseTwo = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (responseTwo.ok) {
        alert("Signed up & Logged in successfully!");
        loginModal.setAttribute("style", "display: none")
        let displayUser = document.createElement("div")
        displayUser.innerHTML = JSON.stringify(username)
        displayUser.setAttribute("style", "color: var(--lime)")
        document.getElementById("navbarSupportedContent").appendChild(displayUser)

        document.querySelector("#name-signup").value = ""
        document.querySelector("#email-signup").value = ""
        document.querySelector("#password-signup").value = ""


    } else {
        //alert sending response from login attempt
        alert(responseTwo.statusText);
    }
}


document
    .querySelector("#loginBtn")
    .addEventListener("click", loginForm);

document
    .querySelector("#signupBtn")
    .addEventListener("click", signupForm);


// async function logout() {
//     const response = await fetch("/api/users/logout", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//     });

//     if (response.ok) {
//         document.location.replace("/");
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector("#deleteBtn").addEventListener("click", logout);

// const handleDeleteComment = async (event) => {
//     event.preventDefault();

//     const id = document.getElementById("duck").value.trim();
//     console.log(id)

//     const response = await fetch(`/api/comments/${id}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         async function reloadComments() {
//             const response = await fetch('/api/comments');
//             const comments = await response.json();
//             // console.log(comments)
//             return comments;

//         }
//         reloadComments().then(comments => {
//             comments;
//             // console.log(comments[0].commenter)
//             // console.log(comments[0].body)
//             let emptyArr = []
//             for (let i = 0; i < comments.length; i++) {
//                 var commenter = comments[i].commenter
//                 var body = comments[i].body
//                 var id = comments[i].id
//                 // console.log(id);


//                 var appendComments = `<figure class="nested">
//                        <blockquote class="blockquote">
//                          <p>${body}</p>
//                       </blockquote>
//                        <figcaption class="blockquote-footer" id="commenter">
//                          ${commenter}    
//                        </figcaption>
//                        <figcaption class="blockquote-footer" id="duck">
//                         ${id}
//                        </figcaption>
//                        <button id= "${id}" class="deleteBtn">Delete</button>
//                      </figure>`

//                 // console.log(appendComments)
//                 emptyArr.push(appendComments)

//             }

//             document.getElementById("comments").innerHTML = emptyArr.join(" ")
//         })
//         alert('Comment successfully deleted!');
//     }
// }
// // if (document.getElementById("${ id }"))

//     // add event listener to 'delete post' button
//     if (document.getElementById("comments").childNodes[0]) {

//         for (var i = 0; i < (document.getElementById("comments").childNodes[0]).length; i++) {
//             console.log(document.getElementById("comments").childNodes[0])

//         }
//         // let deleteBtn = document.getElementsByClassName('deleteBtn');
//         // deleteBtn.addEventListener("click", console.log("duck"));
//     }
