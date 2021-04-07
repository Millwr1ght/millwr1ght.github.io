//when clicked
function navToggle() {
    let topNavList = document.getElementById('#top-nav-list');
    topNavList.classList.toggle('responsive');
};

//when window is resized 
window.onresize = () => {
    if (window.innerWidth > 640) { //not small
        document.getElementById('#top-nav-list').classList.remove('responsive');
    } else { //small
        document.getElementById('#top-nav-list').classList.add('responsive');
    }
};