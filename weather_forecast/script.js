function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '24e74bee267e199afb8757e58ccd207f'; // Replace with your own API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
            `;
        })
        .catch(error => console.log('Error fetching weather:', error));
}
