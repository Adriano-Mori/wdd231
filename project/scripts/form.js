import { startAnimations } from "./anim.js";
import { headerFooter } from "./header-footer.js";
import { toggleFields } from "./toggle.js";
headerFooter();
startAnimations();
toggleFields();
const locationSelection = document.querySelector("#location")

async function getLocations() {
    try {
        const response = await fetch("data/locations.json");
        const data = await response.json();
        displayLocations(data.locations);
    } catch (error) {
        console.error("Error loading menu:", error);
    }
}
function displayLocations(locations) {
    locations.forEach((location) => {
        const option = document.createElement("option");

        option.value = location.value;
        option.textContent = location.local;

        locationSelection.appendChild(option);
    });
}
//timestamp
const form = document.querySelector("form");

form.addEventListener("submit", () => {
    document.getElementById("timestamp").value = Date.now();
})
getLocations();