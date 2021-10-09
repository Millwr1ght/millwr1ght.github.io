const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => { img.removeAttribute('data-src'); };
}

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    });
    images.forEach((image) => {
        imgObserver.observe(image);
    }) 
} else {
    images.forEach((img) => {
        loadImages(img);
    });
}
