const apiKey = "fbb7c84a189c78e991d89829cd6137b2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //waits for the fetch to complete

    if(response.status == 404){
        document.querySelector(".temp").innerHTML = "";
        weatherIcon.src = "images/invalidCity.png";
        document.querySelector(".weather .city").innerHTML = "Invalid City Name";
        document.querySelector(".details").style.display = "none";
    } else{
        var data = await response.json(); //reads response and parses it from JSON string into JS object

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + 
        "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            // .src updates the source
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".details").style.display = "flex";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})