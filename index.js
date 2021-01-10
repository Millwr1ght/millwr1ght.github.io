var d = new Date();
var currentYear = d.getFullYear();
var modified = document.lastModified;

document.getElementById("thisYear").innerHTML = currentYear;
document.getElementById("lastUpdated").innerHTML = modified;