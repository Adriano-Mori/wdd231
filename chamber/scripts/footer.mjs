//hamburger button
const navButton = document.querySelector('#nav-btn');
const navLinks = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});
//date
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
//last modification date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = ` ${document.lastModified}`