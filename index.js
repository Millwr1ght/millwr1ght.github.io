let d = new Date();
console.log(d, d.getFullYear());
document.getElementById('thisYear').textContent = d.getFullYear();

let lastModified = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = lastModified.toUTCString();