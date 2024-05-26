// const navbar = document.querySelector("#navbar")
// const videoHeight = document.querySelector(".video-container").offsetHeight;

// window.addEventListener("scroll", function(){
//     const scrollPosition = window.scrollY;
//     if(scrollPosition > videoHeight){
//         navbar.classList.add("sticky-after-scroll")
//     }
//     else{
//         navbar.classList.remove("sticky-after-scroll")
//     }
// })


const blogsList = [
    {
        id : 1,
        title : "Under the Hood: Unveiling the Mechanics of Performance",
        img : "./images/parts.jpg",
        description : "Whether you're a seasoned car enthusiast or a curious driver, this series will equip you with the knowledge to appreciate the engineering marvel that is your car. We'll explore how different components work together to deliver power, handling, and efficiency."
    },

    {
        id : 2,
        title : "Steering Towards Tomorrow: Exploring the Future of Cars",
        img : "./images/future.jpg",
        description : "Buckle up for a glimpse into the future of transportation!  Steering Towards Tomorrow explores the exciting innovations revolutionizing the automotive industry.  Dive into the world of self-driving cars, sustainable electric vehicles, and connected technologies that are transforming the way we drive.  Join us as we navigate the road ahead, exploring the possibilities and potential challenges that lie on the horizon."
    },

    {
        id : 3,
        title : "The Ultimate Road Trip Companions: Choosing the Perfect Car for Every Adventure",
        img : "./images/travel.jpg",
        description : "The open road awaits! The Ultimate Road Trip Companions is your one-stop guide to selecting the perfect car for any adventure.  Whether you're cruising scenic highways, navigating bustling cities, or tackling rugged off-road terrain, we'll help you find the ideal vehicle to match your travel style and needs. Explore our comprehensive guides, packed with tips and insights to ensure your car becomes more than just transportation - it becomes your trusted companion on every unforgettable journey."
    }
]


const mainBlogImage = document.querySelector(".br-card > img")
const mainBlogTitle = document.querySelector(".br-title")
const mainBlogDesc = document.querySelector(".br-desc")


// dealing with first card
const mainBlogCardOne = document.querySelector(".bc-1")
mainBlogCardOne.addEventListener("click", function(){
    mainBlogImage.src = blogsList[0].img;
    mainBlogTitle.innerHTML = blogsList[0].title
    mainBlogDesc.innerHTML = blogsList[0].description
})


// dealing with second card
const mainBlogCardTwo = document.querySelector(".bc-2")
mainBlogCardTwo.addEventListener("click", function(){
    mainBlogImage.src = blogsList[1].img;
    mainBlogTitle.innerHTML = blogsList[1].title
    mainBlogDesc.innerHTML = blogsList[1].description
})


// dealing with third card
const mainBlogCardThree = document.querySelector(".bc-3")
mainBlogCardThree.addEventListener("click", function(){
    mainBlogImage.src = blogsList[2].img;
    mainBlogTitle.innerHTML = blogsList[2].title
    mainBlogDesc.innerHTML = blogsList[2].description
})


// dealing with hamburger
const menu = document.querySelector(".hamburger")
const navbarLinks = document.querySelector(".navbar-links")
const cross = document.querySelector(".cross")

menu.addEventListener("click", function(){
    navbarLinks.style.right = "0px"
})
cross.addEventListener("click", function(){
    navbarLinks.style.right = "-200px"
})