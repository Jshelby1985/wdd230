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
