// This script fetches the user's current location and displays the weather data for that location.
window.addEventListener("load", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
      );

      // Check if the response is ok (status code 200)
      const data = await response.json();
      checkWeather(data.name); // get city from coordinates and show data
    });
  }
});