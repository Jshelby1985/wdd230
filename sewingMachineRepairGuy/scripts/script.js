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

//Weather Api //  
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const windSpeed = document.querySelector('#current-speed');
  const WindChill = document.querySelector('#chill');
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Moberly&units=imperial&APPID=b840405b3f4959aafe6b1fb2a87611a3"
  
  
  async function apiFetch() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // this is for testing the call
          displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }
    
    apiFetch();
  
    function displayResults(weatherData) {
      currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
      windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
      WindChill.innerHTML = `<strong>${weatherData.main.feels_like.toFixed(0)}</strong>`;
  
      const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      const desc = weatherData.weather[0].description;
  
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
      captionDesc.textContent = desc;
    }