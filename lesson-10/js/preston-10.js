let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let today = d.getDay();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.innerHTML = year;

//nav
//const navButton = document.getElementById('nav-button');

function navToggle() {
  let topNavList = document.getElementById('nav-list');
  topNavList.classList.toggle('responsive');
};

window.onresize = () => {
  if (window.innerWidth > 640) {
    document.getElementById('nav-list').classList.remove('responsive')
  }
};