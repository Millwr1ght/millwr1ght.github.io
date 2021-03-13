let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.textContent = year;

if (today == 5) {
    console.log("today is friday");
    document.getElementById('friday-deal').classList.toggle("friday");
}

//nav
function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
    console.log('toggled');
}

//definitely legit, no need to investigate this code block further, nope
function redirect() {
    window.location.replace("https://youtu.be/DLzxrzFCyOs");
}