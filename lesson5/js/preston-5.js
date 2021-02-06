let lastModified = document.lastModified;
let updateSpan = document.getElementById('lastUpdated');
console.log(lastModified, updateSpan);
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let yearSpan = document.getElementById('thisYear');
console.log(d.getFullYear());
yearSpan.textContent = d.getFullYear()

function navToggle() {
    document.getElementById('top-nav').classList.toggle("responsive");
}

function isTodayFriday (today) {
    return (today == 5) ? document.getElementById('friday-deal').classList.toggle("hidden"): console.log(today, 'not friday');
}

isTodayFriday(today);