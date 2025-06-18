
const apikey = "737ab23afa4b565ff2c4727ff1ca6deb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

checkWeather();
