let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".nav-content");
let body = document.querySelector("body");
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open-menu")

    if (body.style.overflow == "") {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = ""
    }
})
