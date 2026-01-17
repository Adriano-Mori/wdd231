//hamburger button
const navButton = document.querySelector('#nav-btn');
const navLinks = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});
//cards
const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("section");
        card.innerHTML =
            `<img src="images/${member.imageFile}" alt="${member.name}">
            <span class="member-name">${member.name}</span>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>`;
        membersContainer.appendChild(card);
    });
}

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMembers();

//date
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
//last modification date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = ` ${document.lastModified}`