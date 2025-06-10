async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = '4414bd9b7273cccabc9bf99551b1a720'; // Replace with your actual API key from OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("weatherResult").classList.remove("hidden");

    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;

    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
    alert("Error: " + error.message);
  }
}
