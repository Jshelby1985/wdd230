//Time Stamp//
const stamp = new Date();
const year = stamp.getFullYear();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;




//Burger Menu//

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}




//Slideshow//
const slideshowImages = document.querySelectorAll(".slideshow .slideshow-img");
const nextImageDelay = 3500;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";
  currentImageCounter = (currentImageCounter +1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.display = "block";

};

