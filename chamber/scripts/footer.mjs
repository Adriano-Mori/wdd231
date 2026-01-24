//date
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
//last modification date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = ` ${document.lastModified}`