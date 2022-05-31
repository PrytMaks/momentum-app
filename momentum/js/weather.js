const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city')

async function getWeather (){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=895dda26ec1fc5c01c0a16a46073b364&units=metric`
  const res = await fetch(url)
  const data = await res.json()

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather();

city.addEventListener('change', getWeather)