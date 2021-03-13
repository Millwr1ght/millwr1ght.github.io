//declare
const cityID = "5604473";
const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL_current = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=imperial`
const apiURL_forecast = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}&units=imperial`

//fetch current data
fetch(apiURL_current)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let temperature = jsObject.main.temp
        let windSpeed = jsObject.wind.speed;
        console.log(temperature, temperature <= 50, windSpeed, windSpeed > 3) //check inputs
        if (temperature > 50 || windSpeed <= 3) {
            windChillOutput.innerHTML = "N/A";
        } else {
            let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
            document.getElementById('summary-wind-chill').innerHTML = Math.round(windChill) + "°F";
        }
        //get weather icon src and alt
        /*  */

        //fill the weather summary box
        //document.getElementById('summary-condition').textContent = jsObject.main.main; //current condition
        document.getElementById('summary-temp').textContent = jsObject.main.temp + "°F"; //current temp
        document.getElementById('summary-speed').textContent = jsObject.wind.speed + " mph"; //wind speed
        //generate elsewhere // document.getElementByID('summary-wind-chill').textContent = jsObject.main.feels_like + "°F"; //wind chill
        document.getElementById('summary-humid').textContent = jsObject.main.humidity; //current humid
    });

fetch(apiURL_forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log("forecast: ", jsObject);
        const forecast = jsObject["list"].filter((day) =>
            day.dt_txt.includes("18:00:00")
        );
        for (let i = 0; i < 5; i++) {
            let day = forecast[i];

            //image
            let imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
            let desc = day.weather[0].description;
            document.querySelector(`.forecast-grid div:nth-child(${i+1}) img`).setAttribute('src', imagesrc);
            document.querySelector(`.forecast-grid div:nth-child(${i+1}) img`).setAttribute('alt', desc);

            //temperature
            document.querySelector(`.forecast-grid div:nth-child(${i+1}) p`).innerHTML = `${Math.round(day.main.temp)}°F`;
        }
    });