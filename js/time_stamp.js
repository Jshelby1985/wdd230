const d = new Date();
const year = d.getFullYear();
const clock = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;
