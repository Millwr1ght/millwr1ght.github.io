let lastModified = document.lastModified;
const updateSpan = document.getElementById('lastUpdated');
updateSpan.innerHTML = lastModified;

let d = new Date();
let year = d.getFullYear()
const yearSpan = document.getElementById('thisYear');
yearSpan.innerHTML = year;

//nav

function navToggle() {
  let topNavList = document.querySelector('.nav-list');
  topNavList.classList.toggle('responsive');
};

window.onresize = () => {
  if (window.innerWidth > 640) {
    document.querySelector('.nav-list').classList.remove('responsive')
  }
};