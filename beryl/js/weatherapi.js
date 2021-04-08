//declare
var today = new Date();

let cityID = 5538929;
const lat = 37.7094 //N
const lon = -113.6561 //W
const units = 'imperial'
const parts = 'minutely,hourly'
const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${parts}&appid=${apiKey}`
//fetch current data
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //fill the current weather box
        document.getElementById('weather-condition').textContent = jsObject.current.weather[0].main; //current condition
        document.getElementById('weather-temp').textContent = jsObject.current.temp + "°F"; //current temp
        document.getElementById('weather-humid').textContent = jsObject.current.humidity; //current humid

        //current weather image
        let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
        let desc = jsObject.current.weather[0].description;
        document.getElementById('weather-img').setAttribute('src', imagesrc);
        document.getElementById('weather-img').setAttribute('alt', desc);

        //alert
        if (jsObject.alerts != null) {
            document.getElementById('alert-header').textContent = jsObject.alerts[0].name;
            document.getElementById('alert-sender').textContent = `Advisory Authority: ${jsObject.alerts[0].sender_name}`;
            document.getElementById('alert-description').textContent = jsObject.alerts[0].description;
        } else {
            document.getElementById('weather-alert').style.display = "none";
        }

        //3day forecast
        for (let i = 0; i < 3; i++) {
            let day = jsObject.daily[i];
            //day
            document.getElementById(`today${i + 1}`).innerHTML = new Date(today.getTime() + (i + 1) * (24 * 60 * 60 * 1000)).toDateString()
            //image
            let imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
            let desc = day.weather[0].description;
            document.querySelector(`.weather-forecast-grid div:nth-child(${i + 1}) img`).setAttribute('src', imagesrc);
            document.querySelector(`.weather-forecast-grid div:nth-child(${i + 1}) img`).setAttribute('alt', desc);
            //temperature
            document.querySelector(`.weather-forecast-grid div:nth-child(${i + 1}) p`).innerHTML = `${Math.round(day.temp.max)}°F`;
        }
    });