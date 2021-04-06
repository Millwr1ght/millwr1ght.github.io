//get values
let d = new Date();
let thisYear = d.getFullYear();
let lastUpdate = document.lastUpdated;

//get outputs
let copyYearSpan = document.getElementById("copy-year");
let lastUpdatedSpan = document.getElementById("last-updated");

//apply
copyYearSpan.innerHTML = thisYear;
lastUpdatedSpan.innerHTML = lastUpdate;