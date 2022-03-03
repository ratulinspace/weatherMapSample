const API_KEY = `096a76783f54de573959c7832b8ada0e`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displatTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displatTemperature = temperatur => {
    setInnerText('city', temperatur.name);
    setInnerText('temperature', temperatur.main.temp);
    setInnerText('condition', temperatur.weather[0].main);
    console.log(temperatur);
    /* set weather icon */
    const url = `http://openweathermap.org/img/wn/${temperatur.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}