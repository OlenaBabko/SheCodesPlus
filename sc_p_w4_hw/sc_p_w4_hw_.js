let dayTimeElement = document.querySelector("#currentDayTime");
let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let nowDay = days[now.getDay()];
let nowHour = now.getHours();
let nowMinute = now.getMinutes();
dayTimeElement.innerHTML = `${nowDay} ${nowHour}:${nowMinute}`;


// Feature #2
// Add a search engine, when searching for a city (i.e. Paris),
// display the city name on the page after the user submits the form.

function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
        // cityElement.innerHTML = `Searching for ${searchInputValue}...`
    let searchCityInput = document.querySelector("#searchCity-input");
    cityElement.innerHTML = searchCityInput.value;
}
let searchForm = document.querySelector("#searchCity")
searchForm.addEventListener("submit", search);



// Bonus Feature
// fake temperature (17) in Celsius and add a link to convert it to Fahrenheit
function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperature = temperatureElement.innerHTML;
    temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit)

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperature = temperatureElement.innerHTML;
    temperatureElement.innerHTML = Math.round((temperature - 32) * 5/9);
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius)



//   h2  32`C|`F
// if (weather[city] !== undefined) {
//     let temperature = Math.round(weather[city].temp);
//     let temperatureF = Math.round((temperature * 9) / 5 + 32);
//     alert(`${temperature}°C (${temperatureF}°F) in ${city}`);
//   }
//     else {
//     alert(`Sorry, we dont know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);
//   }
  