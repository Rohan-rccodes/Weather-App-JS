const apikey = "737ab23afa4b565ff2c4727ff1ca6deb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// ✅ Custom alert box
function showCustomAlert(message) {
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  alertMessage.textContent = message;
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 1000);
}

async function checkWeather(city) {
  if (!city) {
    showCustomAlert("Please enter a correct city name");
    return;
  }

  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();

  if (response.status == 404 || !data.name) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
    return;
  }

  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + "km/h";

  // ✅ Weather icon

  const condition = data.weather[0].description.toLowerCase();

  if (condition === "clear sky") {
    weatherIcon.src = "images/clear.png";
  } else if (condition === "few clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (condition === "scattered clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (condition === "broken clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (condition === "shower rain") {
    weatherIcon.src = "images/rain.png";
  } else if (condition === "rain") {
    weatherIcon.src = "images/rain.png";
  } else if (condition === "thunderstorm") {
    weatherIcon.src = "images/rain.png";
  } else if (condition === "snow") {
    weatherIcon.src = "images/snow.png";
  } else if (condition === "mist") {
    weatherIcon.src = "images/mist.png";
  } else {
    weatherIcon.src = "images/clear.png"; // default fallback icon
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  searchbox.value = "";
}

// ✅ Event listener
searchbtn.addEventListener("click", () => {
  const city = searchbox.value.trim();
  checkWeather(city);
});
