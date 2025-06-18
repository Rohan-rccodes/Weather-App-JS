// Get the weather data from OpenWeatherMap API
// Replace 'your_api_key' with your actual API key from OpenWeatherMap

const apikey = "737ab23afa4b565ff2c4727ff1ca6deb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Get the user's geolocation
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

// Check if the browser supports geolocation
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  // If the response status is 404, it means the city was not found
  // Hide the weather section and show the error message
  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    console.log(data);

    // Update the UI with the fetched weather data
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    // Set the weather icon based on the weather condition

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

    // Show the weather section
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  // Clear the search box after fetching the weather
  searchbox.value = "";
}

// Check weather based on geolocation
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

checkWeather();
