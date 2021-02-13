/*
The formula to calculate the wind chill factor is
f = 35.74 + 0.6215*t - 35.75*s^{0.16} + 0.4275*t*s^{0.16}

where 
f is the wind chill factor in Fahrenheit, 
t is the air average temperature in Fahrenheit, and 
s is the wind speed in miles per hour.

Input requirements: 
"Temperature is <= 10 °C (50 °F) 
and wind speeds > 4.8 kph (3.0 mph)."
Processing: 35.74 + 0.6215*temperature - 35.75*windSpeed^(0.16) + 0.4275*temperature*windSpeed^(0.16)
Output: wind chill factor in Fahrenheit 
*/


let windChillOutput = document.getElementById('summary-wind-chill');
//get inputs
let temperature = parseFloat(document.getElementById('summary-temp').value);
let windSpeed = parseFloat(document.getElementById('summary-wind-speed').value);
//check inputs
if (temperature > 50 || windSpeed <= 3.0)  {
    windChillOutput.innerHTML = "N/A";
} else {
    let windChill = 35.74 + 0.6215*temperature - 35.75*windSpeed^(0.16) + 0.4275*temperature*windSpeed^(0.16);
    windChillOutput.innerHTML = windChill + "°F";
}