let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.innerHTML = year;

//nav
const navButton = document.getElementById('nav-button');
const topNavList = document.getElementById('top-nav-list');

navButton.addEventListener('click', () => {topNavList.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 640) topNavList.classList.remove('responsive')};

//severity slider
function adjustSeverity(value) {
    document.getElementById('severity-output').innerHTML = value;
};