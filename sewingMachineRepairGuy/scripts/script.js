const date = new Date();
const year = date.getFullYear();
const stringDate = date.toLocaleDateString();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;
//document.getElementById("current").textContent = stringDate;

//Banner
//let banner = document.getElementById("banner");
//createBanner();
//function createBanner(){
   // let currentDay = date.getDay();
    //let currentDay = 1;

    //if (currentDay === 2 || currentDay === 1){
        //banner.style.display = "block";
   // } else {
        //banner.style.display = "none";
    //}
//}

//slideshow
const slideshowImages = document.querySelectorAll(".slideshow-container .slideshow-img");

const nextImageDelay = 3000;

let currentImageCounter = 0;

//slideshowImages[currentImageCounter].style.display = "block";//

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";
  currentImageCounter = (currentImageCounter +1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.display = "block";

};

// Lazy Loading //
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
  observer.observe(img)
})