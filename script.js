

const apikey = "737ab23afa4b565ff2c4727ff1ca6deb"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");

const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerText = data.main.humidity  + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";


}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});


checkWeather();
