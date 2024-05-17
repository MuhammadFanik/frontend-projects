let apiKey = '5a0b43b2154bf1a04182e69b5bbd491e';
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//
let searchBox = document.querySelector(".searchbox")
let searchButton = document.querySelector(".search-btn");
let weatherIcon = document.querySelector(".w-img");
let weather = 

async function weather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data);

    document.querySelector(".city-name").innerHTML = (data.name).toUpperCase();
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".city-temp").innerHTML = Math.round(data.main.temp) + `°C`;

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    } else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    } else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    } else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    
    document.querySelector(".weather").style.display = "block";
    // document.querySelector(".weather").style.display = "block";
    
}

searchButton.addEventListener("click", function(){
    weather(searchBox.value)
})
