const menu = document.querySelector(".hamburger")
const navbarLinks = document.querySelector(".navbar-links")
const cross = document.querySelector(".cross")

menu.addEventListener("click", function(){
    navbarLinks.style.right = "0px"
})
cross.addEventListener("click", function(){
    navbarLinks.style.right = "-200px"
})