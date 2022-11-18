const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav"); 
const ul = document.querySelector(".nav__list");
const header = document.querySelector(".header");


navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
    if (header.classList.contains("row")) {
        header.classList.replace("row","col");
        ul.classList.replace("row","col");
    } else  {
        header.classList.replace("col","row");
        ul.classList.replace("col","row");
    }
})
