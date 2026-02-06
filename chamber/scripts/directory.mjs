import { navBar, footerInfo } from "./footer.mjs";
navBar();
footerInfo();
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
getMembers();
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

