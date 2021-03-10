//declare
const cityID = "5604473";
const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=imperial`



//fetch
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //get weather icon src and alt
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc; //testing
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
        
        //get current temp
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });