//Time Stamp//
const stamp = new Date();
const year = stamp.getFullYear();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;

//Burger Menu//

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
