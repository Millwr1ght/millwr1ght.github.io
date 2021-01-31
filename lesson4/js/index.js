let d = new Date();
console.log(d, d.getFullYear());
document.getElementById('thisYear').textContent = d.getFullYear();

let lastModified = document.lastModified;
console.log(document.lastModified, lastModified);
document.getElementById('lastUpdated').innerHTML = lastModified;

var width = window.innerWidth

function navToggle() {
    document.getElementById('top-nav').classList.toggle("hidden");
}