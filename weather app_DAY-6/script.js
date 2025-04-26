const temprature = document.querySelector("#temprature");
const tempDescription = document.querySelector("#description");
const humidity = document.querySelector("#humidityPer");
const windSpeed = document.querySelector("#windspeed");
const icon = document.querySelector("#weatherIcon");
const searchBtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector(".searchInput");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city !== "") {
        weatherInfo(city);
    }
});


async function weatherInfo(city) {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=0610a5f87d31173a4158bc3827b4aa67`);
    const data = await response.json();

    console.log(data);

    temprature.innerHTML = Math.floor(data.main.temp)+"°C";
    tempDescription.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity+" %";
    windSpeed.innerHTML = data.wind.speed + " km/h";


    let weatherConditions = data.weather[0].main;


    if(weatherConditions.toLowerCase() == 'clouds')
    {
        icon.src = "img/cloud3.webp";
    }
    else if(weatherConditions.toLowerCase() == 'rain')
    {
        icon.src = 'img/rain.webp';
    }
    else if(weatherConditions.toLowerCase() == 'clear')
    {
        icon.src = 'img/cloud1.webp'
    }
    else if(weatherConditions.toLowerCase() == 'mist')
    {
        icon.src = 'img/mist.png'
    }
    else{
        icon.src = 'img/cloud1.webp';
    }
}
