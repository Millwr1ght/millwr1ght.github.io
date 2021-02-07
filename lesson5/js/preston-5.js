let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
console.log(lastModified, updateSpan);
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
const yearSpan = document.getElementById('thisYear');
console.log(d.getFullYear());
yearSpan.textContent = d.getFullYear()

function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
}

function isTodayFriday (today) {
    return (today == 5 ? document.getElementById('friday-deal').classList.toggle("hidden"): console.log(today, 'not friday'));
}

function redirect() {
    window.location.replace("https://youtu.be/DLzxrzFCyOs");
}

window.onload = today => {isTodayFriday(today)};
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};