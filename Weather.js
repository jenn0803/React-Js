// Function to display weather data on the page
function displayWeather(data) {
  // Extract data from data object
  const name = `${data.location.name}, ${data.location.region}`; // Name
  const description = data.current.condition.text; // Description
  const temperature = data.current.temp_c; // Temperature
  const icon = data.current.condition.icon; // Icon
  const country = data.location.country; // Country
  const humidity = data.current.humidity; // Humidity
  const feelslike_c = data.current.feelslike_c; // Feels like temperature
  const wind_kph = data.current.wind_kph; // Wind speed in kph
  const dewpoint_c = data.current.dewpoint_c; // Dewpoint
  const cloud = data.current.cloud; // Cloudiness
  
  // Get current time
  let date = new Date();
  let minutes = date.getMinutes();
  let time = (date.getHours() > 12) ? `${(date.getHours() % 12 || 12)}:${minutes} PM` : `${date.getHours()}:${minutes} AM`;

  // Log data in console (optional)
  console.log(data);
  console.log(name, description, temperature, icon, time, country, humidity, feelslike_c, wind_kph, dewpoint_c, cloud);

  // Display the data in UI
  const initialData = document.getElementById('initialData');
  initialData.innerHTML = `
    <div id="tempANDname">
      <div id="temperature">${temperature}°</div>
      <div id="cityName">${name}</div>
      <img id="icon" src="${icon}" alt="${description}" />
    </div>
    <sub class="dataElement" id="currentTime">${country} ${time}</sub>
    <div class="dataElement" id="description">${description}</div>
    <button class="btn" id="refreshBtn">Refresh</button>
  `;

  const weatherDataContainer = document.getElementById('weatherDataContainer');
  weatherDataContainer.innerHTML = `
    <div id="fullWeatherData">
      <div class="wData"><span class="span titleSpan">Humidity: </span><span class="span dataSpan">${humidity}%</span></div>    
      <div class="wData"><span class="span titleSpan">Feels Like: </span><span class="span dataSpan">${feelslike_c}°C</span></div>    
      <div class="wData"><span class="span titleSpan">Wind Speed: </span><span class="span dataSpan">${wind_kph} kph</span></div>    
      <div class="wData"><span class="span titleSpan">Dewpoint: </span><span class="span dataSpan">${dewpoint_c}°C</span></div>
      <div class="wData"><span class="span titleSpan">Cloudiness: </span><span class="span dataSpan">${cloud}%</span></div>    
    </div>
  `;
}

// Function to make AJAX call to fetch weather data
function getWeather(city) {
  const apiKey = '36624c9ff2b346ec8c975407241310'; // Replace with your actual API key
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayWeather(data);
    } else {
      alert('City not found or invalid API request.');
    }
  };
  xhr.send();
}

// Handle form submit
document.getElementById('weatherForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const city = document.getElementById('city').value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

// Optional: Add event listener for the Refresh button (if desired)
document.getElementById('weatherDataContainer').addEventListener('click', function(e) {
  if (e.target && e.target.id === 'refreshBtn') {
    const city = document.getElementById('city').value;
    if (city) {
      getWeather(city);
    }
  }
});
