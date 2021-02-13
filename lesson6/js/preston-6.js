let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
console.log(today);
yearSpan.textContent = year;

function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
    console.log('toggled');
}

function isTodayFriday (day) {
    //(day == 5) ? document.getElementById('friday-deal').classList.toggle("hidden"): console.log(day, 'not friday');
    if (day == 5) {
        document.getElementById('friday-deal').classList.remove("hidden");
        console.log("today is friday");
    } else {
        console.log(day, 'not friday');
    }
}

function redirect() {
    window.location.replace("https://youtu.be/DLzxrzFCyOs");
}

//window.onload = today => {isTodayFriday(today)};
isTodayFriday(today);


window.onresize = () => {if (window.innerWidth > 640 ) document.getElementsByClassName('nav-list')[0].classList.remove('responsive')};