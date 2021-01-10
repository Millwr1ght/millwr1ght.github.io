let d = new Date();
document.getElementById("thisYear").innerHTML = toString(d.getFullYear());
console.log(d, d.getFullYear());
document.getElementById("lastUpdated").innerHTML = toString(document.lastModified);