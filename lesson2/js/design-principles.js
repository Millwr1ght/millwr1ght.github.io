let d = new Date();
console.log(d, d.getFullYear()); //console.log() debugging ftw
document.getElementById('thisYear').textContent = d.getFullYear();

let lastModified = document.lastModified;
console.log(document.lastModified, lastModified);
document.getElementById('lastUpdated').innerHTML = lastModified;