const params = new URLSearchParams(window.location.search);

// common fields
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const messageField = document.getElementById("message");
const timestampField = document.getElementById("timestamp");

// reservation
const locationField = document.getElementById("location");
const numberPeopleField = document.getElementById("numberPeople");
const dateField = document.getElementById("date");

// delivery fields
const addressField = document.getElementById("address");
const payingMethodField = document.getElementById("payingMethod");

const serviceType = params.get("serviceType")

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
//disp. info
function populateFields() {
    //common
    nameField.value = params.get("name") || "";
    emailField.value = params.get("email") || "";
    phoneField.value = params.get("phone") || "";
    numberPeopleField.value = params.get("numberPeople") || "";
    messageField.value = params.get("message") || "";
    //timsetamp
    const rawTimestamp = params.get("timestamp");
    if (rawTimestamp) {
        timestampField.value = new Date(Number(rawTimestamp)).toLocaleString();
    }
    document.querySelectorAll('input[name="serviceType"]').forEach(radio => {
        radio.checked = radio.value === serviceType;
    });
    //fields that depend on delivery or reservation
    if (serviceType === "reservation") {
        locationField.value = params.get("location") || "";
        numberPeopleField.value = params.get("numberPeople") || "";
        dateField.value = params.get("date") || "";

        document.getElementById("reservation-fields").style.display = "block";
        document.getElementById("delivery-fields").style.display = "none";

    } else if (serviceType === "delivery") {
        addressField.value = params.get("address") || "";
        payingMethodField.value = params.get("payingMethod") || "";

        document.getElementById("delivery-fields").style.display = "block";
        document.getElementById("reservation-fields").style.display = "none";
    }
    document.querySelectorAll("input, textarea, select").forEach(field => {
        field.disabled = true;
    });
}

loadLocations().then(populateFields);
