const cityList = ["New York", "London", "Tokyo", "Paris", "Mumbai", "Delhi", "Sydney", "Moscow"];
const suggestionBox = document.getElementById("suggestions");

searchbox.addEventListener("input", () => {
  const input = searchbox.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (!input) return;

  const filtered = cityList.filter(city => city.toLowerCase().startsWith(input));
  filtered.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => {
      searchbox.value = city;
      suggestionBox.innerHTML = "";
      checkWeather(city);
    });
    suggestionBox.appendChild(li);
  });
});
