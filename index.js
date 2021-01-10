let d = new Date();
let currentYear = d.getFullYear();
let modified = document.lastModified;

document.getElementById("thisYear").innerHTML = currentYear;
document.getElementById("lastUpdated").innerHTML = modified;