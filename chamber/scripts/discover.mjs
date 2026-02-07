import { places } from "../data/places.mjs";
import { navBar, footerInfo } from "./footer.mjs";
navBar();


const grid = document.querySelector(".discover-grid");
const visitMessage = document.querySelector("#visit");

//cards
places.forEach((place, index) => {
    const card = document.createElement("article");
    card.classList.add("place-card", `card${index + 1}`)
    card.innerHTML = `
        <h2>${place.name}</h2>
        <div class="place-content">
        <figure>
        <img src="${place.image}" alt="${place.name}" loading="lazy" width="240">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
        </div>
    `;

    grid.appendChild(card);
});

//visitmsg
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions:)";
} else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${diffDays} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

footerInfo();
window.addEventListener("load", () => {
    document.body.classList.add("animate");
});