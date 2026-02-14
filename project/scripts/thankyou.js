const params = new URLSearchParams(window.location.search);

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const locationField = document.getElementById("location");
const numberPeopleField = document.getElementById("numberPeople");
const messageField = document.getElementById("message");
const timestampField = document.getElementById("timestamp");

async function loadLocations() {
    try {
        const response = await fetch("data/locations.json");
        const data = await response.json();

        data.locations.forEach((location) => {
            const option = document.createElement("option");
            option.value = location.value;
            option.textContent = location.local;
            locationField.appendChild(option);
        });

        locationField.value = params.get("location") || "";

    } catch (error) {
        console.error("Error loading locations:", error);
    }
}

function populateFields() {
    nameField.value = params.get("name") || "";
    emailField.value = params.get("email") || "";
    phoneField.value = params.get("phone") || "";
    numberPeopleField.value = params.get("numberPeople") || "";
    messageField.value = params.get("message") || "";

    const rawTimestamp = params.get("timestamp");
    if (rawTimestamp) {
        timestampField.value = new Date(Number(rawTimestamp)).toLocaleString();
    }

    document.querySelectorAll("input, textarea, select").forEach(field => {
        field.disabled = true;
    });
}

loadLocations();
populateFields();
