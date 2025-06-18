const apikey = "737ab23afa4b565ff2c4727ff1ca6deb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();

  if (response.status == 404 || !data.name) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    // Set the icon based on weather condition
    const weather = data.weather[0].main;
    switch (weather) {
      case "Clouds":
        weathericon.src = "images/clouds.png";
        break;
      case "Clear":
        weathericon.src = "images/clear.png";
        break;
      case "Rain":
        weathericon.src = "images/rain.png";
        break;
      case "Drizzle":
        weathericon.src = "images/drizzle.png";
        break;
      case "Mist":
        weathericon.src = "images/mist.png";
        break;
      case "Snow":
        weathericon.src = "images/snow.png";
        break;
      default:
        weathericon.src = "";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  // Clear the input
  searchbox.value = "";
}

// Button event
searchbtn.addEventListener("click", () => {
  const city = searchbox.value.trim();
  checkWeather(city);
});

// ❌ Remove this call if you're not using geolocation or default city
// checkWeather(); // ← remove this line if no default value
