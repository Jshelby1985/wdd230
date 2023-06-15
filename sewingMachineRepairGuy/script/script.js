const date = new Date();
const year = date.getFullYear();
const stringDate = date.toLocaleDateString();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;
document.getElementById("current").textContent = stringDate;

//Banner
let banner = document.getElementById("banner");
createBanner();
function createBanner(){
    let currentDay = date.getDay();
    //let currentDay = 1;

    if (currentDay === 2 || currentDay === 1){
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    };
};

//slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};


//lazy loading

let options = {
  threshold: 0.8
};

const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer){
  entries.forEach(entry => {
      if (entry.isIntersecting){
          const img = entry.target;
          const img_src = img.dataset.src;
          img.src = img_src;
      };
  });
};

let images = document.querySelectorAll("img[data-src]");

images.forEach((img) => {
  observer.observe(img);
});