//declare
let cityID = 5538929;
const lat = 37.7094 //N
const lon = -113.6561 //W
const parts = 'minutely,hourly'
const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${parts}&appid=${apiKey}`
//fetch current data
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        //fill the current weather box
        document.getElementById('weather-condition').textContent = jsObject.current.weather[0].description; //current condition
        document.getElementById('weather-temp').textContent = jsObject.current.temp + "°F"; //current temp
        document.getElementById('weather-humid').textContent = jsObject.current.humidity; //current humid

        //current weather image
        let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
        let desc = jsObject.current.weather[0].description;
        document.getElementById('weather-img').setAttribute('src', imagesrc);
        document.getElementById('weather-img').setAttribute('alt', desc);

        //alert
        document.getElementById('alert-header').textContent = jsObject.alerts[0].name;
        document.getElementById('alert-sender').textContent = `Advisory Authority: ${jsObject.alerts[0].sender_name}`;
        document.getElementById('alert-description').textContent = jsObject.alerts[0].description;

        
        //3day forecast
        
    });