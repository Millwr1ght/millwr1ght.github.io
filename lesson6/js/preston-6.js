let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
console.log(lastModified, updateSpan);
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
console.log(year, today);
yearSpan.textContent = year;

function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
    console.log('toggled');
}

function isTodayFriday (today) {
    return (today == 5 ? document.getElementById('friday-deal').classList.toggle("hidden"): console.log(today, 'not friday'));
}

function redirect() {
    window.location.replace("https://youtu.be/DLzxrzFCyOs");
}

window.onload = today => {isTodayFriday(today)};
window.onresize = () => {if (window.innerWidth > 640 ) document.getElementsByClassName('nav-list')[0].classList.remove('responsive')};