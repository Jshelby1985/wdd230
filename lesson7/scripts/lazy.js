let options = {
    threshold: 0.1
}

const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const img = entry.target;
            const img_src = img.dataset.src;
            img.src = img_src;
        }
    })
}

let images = document.querySelectorAll("img[data-src]");

images.forEach((img) => {
    observer.observe(img);
});

