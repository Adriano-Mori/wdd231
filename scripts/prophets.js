const cards = document.querySelector('#cards');
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        //populate the heading element with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        //build the image element by setting the attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute(
            'alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        //append
        card.appendChild(fullName); //fill in the blank
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData();
