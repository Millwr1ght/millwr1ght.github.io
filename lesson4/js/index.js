let d = new Date();
console.log(d, d.getFullYear());
document.getElementById('thisYear').textContent = d.getFullYear();

let lastModified = document.lastModified;
console.log(document.lastModified, lastModified);
document.getElementById('lastUpdated').innerHTML = lastModified;

var width = window.innerWidth

function navToggle() {
    let topNav = document.getElementById('top-nav');
    if (topNav.className === "top-nav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "top-nav";
    }
}