let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.innerHTML = year;

//nav
function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
    console.log('toggled');
}

//severity slider
function adjustSeverity(value) {
  severityLabel.innerHTML = value;
};