//declare
const cityID = "5604473";
const apiKey = "f7e1c17f0ec2e5c6172315506ce89862";
const apiURL = `api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`

//fetch
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });