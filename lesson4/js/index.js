let lastModified = document.lastModified;
let updateSpan = document.getElementById('lastUpdated');
console.log(document.lastModified, lastModified);
updateSpan.innerHTML = lastModified;

let d = new Date();
let yearSpan = document.getElementById('thisYear');
console.log(d.getFullYear());
yearSpan.textContent = d.getFullYear();

function navToggle() {
    document.getElementById('top-nav').classList.toggle("hidden");
}