const newDay = new Date();

//Weather API//
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humid');
const captionDesc = document.querySelector('figcaption');

const day1Date = document.querySelector('#day1Date');
const day1Htemp = document.querySelector('#foreDay1H');
const day1Ltemp = document.querySelector('#foreDay1L');
const day1cond = document.querySelector('#foreDay1C');
const day1icon = document.querySelector('#foreDay1Icon');

const day2Date = document.querySelector('#day2Date');
const day2Htemp = document.querySelector('#foreDay2H');
const day2Ltemp = document.querySelector('#foreDay2L');
const day2cond = document.querySelector('#foreDay2C');
const day2icon = document.querySelector('#foreDay2Icon');

const day3Date = document.querySelector('#day3Date');
const day3Htemp = document.querySelector('#foreDay3H');
const day3Ltemp = document.querySelector('#foreDay3L');
const day3cond = document.querySelector('#foreDay3C');
const day3icon = document.querySelector('#foreDay3Icon');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&units=imperial&appid=b840405b3f4959aafe6b1fb2a87611a3";

//Day list//
const day=[
  
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    
  ];
  //current day//
  const today = newDay.getDay();
  


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
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(0)}</strong>`;

    day1Date.innerHTML= day[today+1];
    day1Htemp.innerHTML=`${weatherData.list[1].main.temp_max}`;
    day1Ltemp.innerHTML=`${weatherData.list[1].main.temp_min}`;
    day1cond.innerHTML=`${weatherData.list[1].weather[0].main}`;
    day1icon.innerHTML=`${weatherData.list[1].weather[0].icon}`;

    day2Date.innerHTML= day[today+2];
    day2Htemp.innerHTML=`${weatherData.list[2].main.temp_max}`;
    day2Ltemp.innerHTML=`${weatherData.list[2].main.temp_min}`;
    day2cond.innerHTML=`${weatherData.list[2].weather[0].main}`;
    day2icon.innerHTML=`${weatherData.list[2].weather[0].icon}`;

    day3Date.innerHTML= day[today+3];
    day3Htemp.innerHTML=`${weatherData.list[3].main.temp_max}`;
    day3Ltemp.innerHTML=`${weatherData.list[3].main.temp_min}`;
    day3cond.innerHTML=`${weatherData.list[3].weather[0].main}`;
    day3icon.innerHTML=`${weatherData.list[3].weather[0].icon}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const d1icon = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const d2icon = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const d3icon = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;

    const desc = weatherData.list[0].weather[0].description;
    const desc1 = weatherData.list[1].weather[0].main;
    const desc2 = weatherData.list[2].weather[0].main;
    const desc3 = weatherData.list[3].weather[0].main;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    day1icon.setAttribute('src', d1icon);
    day1icon.setAttribute('alt', desc1);
    day2icon.setAttribute('src', d2icon);
    day2icon.setAttribute('alt', desc2);
    day3icon.setAttribute('src', d3icon);
    day3icon.setAttribute('alt', desc3);

    captionDesc.textContent = desc;
  }



//Drink count//


document.addEventListener('DOMContentLoaded', (event) => {
    const drinkCount = document.getElementById('count');

    let drinkCounter = localStorage.getItem('drinkCounter');
    if (drinkCounter === null) {
        localStorage.setItem("drinkCounter", 0);
        drinkCounter = 0;
    }

    if (drinkCounter != 0){
        document.getElementById("count").textContent = `Your current drink count is ${drinkCounter}!!! How about another?`;

    } else{
        document.getElementById("count").textContent = "You've never ordered a drink. Lets change that today?";
    }

});




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

