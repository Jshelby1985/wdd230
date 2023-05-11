const year = new Date().getFullYear();
const date = new Date().toLocaleDateString();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;
document.getElementById("current").textContent = date;
