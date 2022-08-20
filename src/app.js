function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

apiKey = "820f87f35ac7df288b102b51b47b967b";
currentCityName = `New York`;
apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
