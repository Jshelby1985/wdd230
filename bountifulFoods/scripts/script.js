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





//Weather API//
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humid');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&APPID=b840405b3f4959aafe6b1fb2a87611a3"

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({id: 11,cityid: '5334223',appid: 'b840405b3f4959aafe6b1fb2a87611a3',units: 'imperial',containerid: 'openweathermap-widget-11',  });
      (function() {var script = document.createElement('script');
      script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s); 
      })();


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
  
  //apiFetch();

  //function displayResults(weatherData) {
  //  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  //  humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
  //  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  //  const desc = weatherData.weather[0].description;

  //  weatherIcon.setAttribute('src', iconsrc);
  //  weatherIcon.setAttribute('alt', desc);
  //  captionDesc.textContent = desc;
  //}
  //displayResults();



  //drink count//


  document.addEventListener('DOMContentLoaded', (event) => {
    const drinkCount = document.getElementById('count');
  
    let drinkCounter = localStorage.getItem('drinkCounter');
    if (drinkCounter === null) {
      drinkCounter = 0;
    }
    
    if (drinkCounter != 0){
      document.getElementById("count").textContent = `Your current drink count is ${drinkCounter}. How about another?`;

    } else{
      document.getElementById("count").textContent = "You've never ordered a drink. Lets change that today?";
    }

  });



    //Nutrition
    //fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    //.then(response => response.json())
    //.then(data => {
    //  const nutritions = { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 };

    //  selectedFruits.forEach(selectedFruit => {
    //    const fruit = data.find(fruit => fruit.name === selectedFruit);
    //    Object.keys(nutritions).forEach(key => {
    //      nutritions[key] += fruit.nutritions[key];
    //    });
    //  });

    //  const outputDiv = document.getElementById('output');
    //  outputDiv.innerHTML = `
    //    <p>Order Number: ${orderNumber}</p>
    //    <p>Name: ${firstName}</p>
    //    <p>Email: ${email}</p>
    //    <p>Phone: ${phone}</p>
    //    <p>Selected fruits: ${fruit1}, ${fruit2}, ${fruit3}</p>
    //    <p>Special Instructions: ${specialInstructions}</p>
    //    <p>Order Date: ${new Date().toLocaleDateString()}</p>
    //    <p>Total Nutritions:</p>
    //    <p>Carbohydrates: ${nutritions.carbohydrates.toFixed(2)}</p>
    //    <p>Protein: ${nutritions.protein.toFixed(2)}</p>
    //    <p>Fat: ${nutritions.fat.toFixed(2)}</p>
    //    <p>Sugar: ${nutritions.sugar.toFixed(2)}</p>
    //  `;
  //});