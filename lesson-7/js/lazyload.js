const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {img.removeAttribute('data-src');};
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px" 
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver(image);
})
