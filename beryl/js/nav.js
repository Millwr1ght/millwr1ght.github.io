//when clicked
function navToggle() {
    let topNavList = document.querySelector('.top-nav-list');
    topNavList.classList.toggle('responsive');
};

//when window is resized 
window.onresize = () => {
    if (window.innerWidth > 640) { //not small
        document.querySelector('.top-nav-list').classList.remove('responsive');
    }
};