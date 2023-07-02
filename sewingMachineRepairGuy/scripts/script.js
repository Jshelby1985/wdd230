const date = new Date();
const year = date.getFullYear();
const stringDate = date.toLocaleDateString();
const time = date.toLocalTimeString();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;
document.getElementById("time").textContent = time;
document.getElementById("current").textContent = stringDate;





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
//const slideshowImages = document.querySelectorAll(".slideshow-container .slideshow-img");

//const nextImageDelay = 3000;

//let currentImageCounter = 0;

//slideshowImages[currentImageCounter].style.display = "block";

//setInterval(nextImage, nextImageDelay);

//function nextImage() {
//  slideshowImages[currentImageCounter].style.display = "none";
//  currentImageCounter = (currentImageCounter +1) % slideshowImages.length;
//  slideshowImages[currentImageCounter].style.display = "block";

//};






// Lazy Loading //
//let options = {
//  threshold: 0.1
//}

//const observer = new IntersectionObserver(imageObserver, options);

//function imageObserver(entries, observer){
//  entries.forEach(entry => {
//      if (entry.isIntersecting){
//          const img = entry.target;
//          const img_src = img.dataset.src;
//          img.src = img_src;
//      }
//  })
//}

//let images = document.querySelectorAll("img[data-src]");

//images.forEach((img) => {
//  observer.observe(img)
//})





//Weather Api //  
//  const currentTemp = document.querySelector('#current-temp');
//  const weatherIcon = document.querySelector('#weather-icon');
//  const captionDesc = document.querySelector('figcaption');
//  const windSpeed = document.querySelector('#current-speed');
//  const WindChill = document.querySelector('#chill');
//  const url = "https://api.openweathermap.org/data/2.5/weather?q=Moberly&units=imperial&APPID=b840405b3f4959aafe6b1fb2a87611a3"
  
//  async function apiFetch() {
//      try {
//        const response = await fetch(url);
//        if (response.ok) {
//          const data = await response.json();
//          console.log(data); // this is for testing the call
//          displayResults(data);
//        } else {
//          throw Error(await response.text());
//        }
//      } catch (error) {////
//          console.log(error);
//      }
//    }
    
//    apiFetch();
  
//    function displayResults(weatherData) {//
//      currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
//      windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
//      WindChill.innerHTML = `<strong>${weatherData.main.feels_like.toFixed(0)}</strong>`;
  
//      const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//      const desc = weatherData.weather[0].description;
  
//      weatherIcon.setAttribute('src', iconsrc);
//      weatherIcon.setAttribute('alt', desc);
//      captionDesc.textContent = desc;
//    }





//products JSON
//const json = "data.json";

//async function getProductsData(){
//  const response = await fetch(json);
//  const data = await response.json();
//  return data.products;
//}
//getProductsData(json)
//  .then((products) =>{
//  displayProducts(products);
// });

//const displayProducts = (products) => {
//  const cards = document.querySelector('div.cards');
//  let sectionNumber = 0;

//  products.forEach((product) => {
//    let card = document.createElement('section');
//    let h2 = document.createElement('h2');
//    let name = document.createElement('p');
//    let price = document.createElement('p');
//    let pic = document.createElement('img');
//    let type = document.createElement('p');
//    let buy = document.createElement('a');
//    sectionNumber = sectionNumber +1;

//    card.setAttribute('id', `section ${product.name}`);
//    h2.textContent = `${product.brand}`;
//    h2.setAttribute('class', 'brand');
//    name.textContent = `Color/Name: ${product.name}`;
//    name.setAttribute('class', 'name');
//    price.textContent = `Price: ${product.price}`;
//    price.setAttribute('class', 'price');
//    pic.setAttribute('src', product.picture);
//    pic.setAttribute('alt','Product Image');
//    type.textContent = `Thread Type: ${product.type}`;
//    type.setAttribute('class', 'type');
//    buy.textContent = `Where to buy`;
//    buy.setAttribute ('href', product.url);
//    buy.setAttribute('class', 'buy');

//    card.appendChild(h2);
//    card.appendChild(name);
//    card.appendChild(price);
//    card.appendChild(pic);
//    card.appendChild(type);
//    card.appendChild(buy);
//    cards.appendChild(card);
//  });
//}