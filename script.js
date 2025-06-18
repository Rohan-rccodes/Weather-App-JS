// Description: This script fetches weather data from the OpenWeatherMap API based on user input and displays it on the webpage.

const apikey = "737ab23afa4b565ff2c4727ff1ca6deb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// Get references to the DOM elements
// ❗️ Make sure to replace the API key with your own from OpenWeatherMap

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


// Function to check the weather based on the city name
async function checkWeather(city) {
  if (!city) {
    showCustomAlert("Please enter a correct city name");
    return;
  }
  //-------------------------------------------------------------------
  // Show a custom alert message

  function showCustomAlert(message) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");

    alertMessage.textContent = message;
    alertBox.classList.add("show");

    setTimeout(() => {
      alertBox.classList.remove("show");
    }, 1000); // alert disappears after 1 seconds
  }

  //---------------------------------------------------------------------

  // If no city is provided, use a default value (e.g., "London")

  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();

  // Check if the response is successful
  // If the city is not found, display an error message
  // If the city is found, display the weather information
  // and set the appropriate weather icon

  if (response.status == 404 || !data.name) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    // Set the weather icon based on the weather condition
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

