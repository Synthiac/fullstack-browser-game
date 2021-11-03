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
                .getElementById("signInForm")
                .setAttribute("style", "display: none")
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
                .getElementById("signUpForm")
                .setAttribute("style", "display: none")
        });
};
