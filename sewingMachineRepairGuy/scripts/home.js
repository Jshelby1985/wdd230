//slideshow
const slideshowImages = document.querySelectorAll(".slideshow-container .slideshow-img");

const nextImageDelay = 2500;

let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";
  currentImageCounter = (currentImageCounter +1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.display = "block";

};


//Weather Api //  
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#current-speed');
const WindChill = document.querySelector('#chill');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Moberly&units=imperial&APPID=b840405b3f4959aafe6b1fb2a87611a3"
//const url = "https://api.weatherstack.com/current?access_key=483cbd06dd1e5bd9bd14653c21477d58&query=usa.Moberly&units=f";


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
    } catch (error) {//
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
