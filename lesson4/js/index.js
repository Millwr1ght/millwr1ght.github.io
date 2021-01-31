let lastModified = document.lastModified;
console.log(document.lastModified, lastModified);
document.getElementById('lastUpdated').innerHTML = lastModified;

let d = new Date();
console.log(d.getFullYear());
document.getElementById('thisYear').textContent = d.getFullYear();

function navToggle() {
    document.getElementById('top-nav').classList.toggle("hidden");
}