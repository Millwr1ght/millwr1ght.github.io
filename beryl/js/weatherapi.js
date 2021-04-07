//declare
cityID = 5538929;

const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL_current = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=imperial`

//fetch current data
fetch(apiURL_current)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let temperature = jsObject.main.temp
        let windSpeed = jsObject.wind.speed;
        console.log(temperature, temperature <= 50, windSpeed, windSpeed > 3) //check inputs
        if (temperature > 50 || windSpeed <= 3) {
            document.getElementById('weather-wind-chill').innerHTML = "N/A";
        } else {
            let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
            document.getElementById('weather-wind-chill').innerHTML = Math.round(windChill) + "°F";
        }

        //fill the weather box
        document.getElementById('weather-condition').textContent = jsObject.weather[0].main; //current condition
        document.getElementById('weather-temp').textContent = jsObject.main.temp + "°F"; //current temp
        document.getElementById('weather-speed').textContent = jsObject.wind.speed + " mph"; //wind speed
        //generate elsewhere //document.getElementByID('weather-wind-chill').textContent = jsObject.main.feels_like + "°F"; //wind chill
        document.getElementById('weather-humid').textContent = jsObject.main.humidity; //current humid

        //image
        let imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
        let desc = day.weather[0].description;
        document.getElementById('weather-img').setAttribute('src', imagesrc);
        document.getElementById('weather-img').setAttribute('alt', desc);

    });