let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.textContent = year;

//nav
function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
    console.log('toggled');
}

//severity slider
const severitySlider = document.getElementById('#severity');
const severityLabel = document.getElementById('#severity-output');

severityLabel.textContent = severitySlider.value;

severitySlider.addEventListener('input', function() {
  severityLabel.textContent = severitySlider.value;
});