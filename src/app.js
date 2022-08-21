function formatDate(timestamp) {
  //calculate the date in return with the format "Friday 5:00"
  let date = new Date(timestamp);
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysWeek[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  //console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconWeatherElement = document.querySelector("#iconWeather");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconWeatherElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconWeatherElement.setAttribute(
    "alt",
    `response.data.weather[0].description`
  );
}

function search(city) {
  let apiKey = "820f87f35ac7df288b102b51b47b967b";
  let currentCityName = city;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", handleSubmit);
