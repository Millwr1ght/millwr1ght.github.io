let d = new Date();
let currentYear = d.getFullYear();
let modified = document.lastModified;

document.getElementById("thisYear").textContent = currentYear;
document.getElementById("lastUpdated").textContent = modified;