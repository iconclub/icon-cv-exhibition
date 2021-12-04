const cvs = Array.from(document.querySelectorAll(".cv"));
const leftButton = document.querySelector(".js-left");
const rightButton = document.querySelector(".js-right")

let currentPosition = 0;

leftButton.addEventListener("click", (event) => {

    let oldNode = cvs[currentPosition]
    currentPosition -= 1;

    if (currentPosition < 0) {
        currentPosition = cvs.length - 1;
    }

    let node = cvs[currentPosition];

    oldNode.classList.add("cv--hidden");
    node.classList.remove("cv--hidden");
})

rightButton.addEventListener("click", (event) => {

    let oldNode = cvs[currentPosition]
    currentPosition += 1;

    if (currentPosition >= cvs.length) {
        currentPosition = 0;
    }

    let node = cvs[currentPosition];

    oldNode.classList.add("cv--hidden");
    node.classList.remove("cv--hidden");
})


