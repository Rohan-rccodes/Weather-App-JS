

const apikey = "737ab23afa4b565ff2c4727ff1ca6deb"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apikey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp + "°C";

    document.querySelector(".humidity").innerText = data.main.humidity  + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";


}
checkWeather();
