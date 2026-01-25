const membersContainer = document.querySelector("#spotlight");
async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = "";
    //filter
    const eligible = members.filter(
        member => member.membershipLevel === 3 || member.membershipLevel === 2
    );
    //randomize
    const rand = eligible.sort(() => 0.5 - Math.random());
    const spotlightMembers = rand.slice(0, 3);

    spotlightMembers.forEach(member => {
        const card = document.createElement("article");
        card.innerHTML =
            `<h3>${member.name}</h3>
            <div class="spotlight-content">
            <img src="images/${member.imageFile}" alt="${member.name}" width:"2000">
                <div>
                <p>
                <strong>Phone:</strong>
                 ${member.phoneNumber}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <a href="${member.website}" target="_blank"><strong>Visit Website</strong></a>
                </div>
            </div>`;
        membersContainer.appendChild(card);
    });
}
getMembers();
