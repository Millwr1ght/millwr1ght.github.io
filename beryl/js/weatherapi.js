//declare
let cityID = 5538929;
const lat = 37.7094 //N
const lon = -113.6561 //W
const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
//fetch current data
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        //fill the current weather box
        document.getElementById('weather-condition').textContent = jsObject.weather[0].main; //current condition
        document.getElementById('weather-temp').textContent = jsObject.main.temp + "°F"; //current temp
        document.getElementById('weather-humid').textContent = jsObject.main.humidity; //current humid

        //current weather image
        let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        let desc = jsObject.weather[0].description;
        document.getElementById('weather-img').setAttribute('src', imagesrc);
        document.getElementById('weather-img').setAttribute('alt', desc);

        //3day forecast
        
    });