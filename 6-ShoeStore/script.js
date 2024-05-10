// js for sliderWrapper
const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menu-item")
// console.log(menuItems);


// product section js
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 110,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 130,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 90,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 125,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 80,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];


  let choosenProduct = products[0];

  const currentProductImage = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".product-title");
  const currentProductPrice = document.querySelector(".product-price");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".sizes")

  menuItems.forEach(function(item, index){
    item.addEventListener("click", function(){
      // changing the choosen product
      choosenProduct = products[index];

      // changing the title
      currentProductTitle.textContent = choosenProduct.title;
      // change the price
      currentProductPrice.textContent = "$" +  choosenProduct.price;
      // change the image
      currentProductImage.src = choosenProduct.colors[0].img
      // assigning the new colors
      currentProductColors.forEach(function(color, index){
        color.style.backgroundColor = choosenProduct.colors[index].code
      })




      // changing the slider section
        wrapper.style.transform = `translateX(${-100*index}vw)`
    })
})

currentProductColors.forEach(function(color, index){
  color.addEventListener("click", function(){
    currentProductImage.src = choosenProduct.colors[index].img;
  })
})

// dealing with the modal
const modal = document.querySelector(".modal");
const button = document.querySelector(".btn");
const close = document.querySelector(".cross");


// this will pop up the modal
button.addEventListener("click", function(){
  modal.style.display = "block";
})

// this will close the modal
close.addEventListener("click", function(){
  modal.style.display = "none";
})