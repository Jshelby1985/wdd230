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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// lazy //

let options = {
  threshold: 0.1
};
imageObserver()

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
