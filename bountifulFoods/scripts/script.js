const stamp = new Date();
const year = stamp.getFullYear();
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = year;
