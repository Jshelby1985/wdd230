const date = new Date();
// let currentDay = date.getDay();
let currentDay = 2
let message = "";

function createBanner(){
    if (currentDay < 3) {
        message = "Come Join us for the chamber meet and greet Wednesday at 7:00 p.m."
    }
    document.getElementById("message1").textContent = message;
    const banner = document.createElement("banner");
    banner.textContent = message;

}