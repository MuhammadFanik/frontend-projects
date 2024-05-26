const aboutUsList = [
    {
        index : 1,
        img : "./images/goals.jpg",
        title: "Our Goals",
        description : "Our vision is to be the go-to choice for all your car rental needs. We strive to provide an unparalleled selection of vehicles to suit every taste and budget, while streamlining the rental process through our user-friendly online platform. Exceeding expectations is our priority, with exceptional customer service ensuring a smooth and stress-free journey. We're committed to becoming an industry leader by embracing innovation and efficiency, all while making car rentals accessible and affordable. Looking ahead, we're passionate about sustainable practices and incorporating a greener fleet, and fostering a team environment that values growth and excellence. Ultimately, our goal is to continuously redefine the car rental experience, setting new standards for the future."
    },
    {
        index : 2,
        img : "./images/work.jpg",
        title: "Our Work",
        description : "We're more than just car rentals; we're the facilitators of unforgettable experiences.  Our mission is to empower your journeys by providing a seamless and reliable rental experience. We meticulously maintain a diverse fleet, ensuring you have the perfect vehicle for every escapade.  From fuel-efficient sedans for city exploration to spacious SUVs for family adventures, we have you covered. Our commitment goes beyond the vehicle.  We offer exceptional customer service, a user-friendly online booking platform, and transparent pricing.  Our team is dedicated to exceeding expectations and making your rental journey smooth and stress-free.So, buckle up and explore!  We're here to get you on the road to incredible memories."
    },
    {
        index : 3,
        img : "./images/passion.jpg",
        title: "Our Passion",
        description : "Our hearts race with the rhythm of the engine and our spirits soar with the freedom of the open road.  Here at AutoSync Retails, we're not just in the car rental business, we're fueled by a shared passion for exploration.We understand the thrill of discovering new landscapes, the joy of embarking on spontaneous adventures, and the magic of creating lasting memories on the road.  That's why we're dedicated to providing you with the perfect vehicle and the smoothest rental experience, so you can focus on what truly matters: the journey itself.We believe that car rentals are more than just a mode of transportation; they're the key to unlocking a world of possibilities.  Join us as we share our passion for exploration and help you turn your travel dreams into unforgettable realities."
    }
]

const aboutCards = document.querySelectorAll(".about-card")
const aboutImage = document.querySelector(".about-right > img")
const aboutTitle = document.querySelector(".ar-title")
const aboutDesc = document.querySelector(".ar-desc")

aboutCards.forEach(function(card, index){
    card.addEventListener("click", function(){
        aboutImage.src = aboutUsList[index].img;
        aboutTitle.innerHTML = aboutUsList[index].title;
        aboutDesc.innerHTML = aboutUsList[index].description;
    })
})

const menu = document.querySelector(".hamburger")
const navbarLinks = document.querySelector(".navbar-links")
const cross = document.querySelector(".cross")

menu.addEventListener("click", function(){
    navbarLinks.style.right = "0px"
})
cross.addEventListener("click", function(){
    navbarLinks.style.right = "-200px"
})