const menuListContainer = document.querySelector('#menu-list')
async function getMenu() {
    try {
        const response = await fetch("data/menu.json");
        const data = await response.json();
        displayMenuList(data.menuItems);
    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

function displayMenuList(menuItems) {

    menuListContainer.innerHTML = "";
    const categories = [...new Set(menuItems.map(item => item.category))];
    categories.forEach((category, index) => {
        const section = document.createElement("section");
        section.classList.add("menu-section", `menu${index + 1}`);
        section.innerHTML =
            ` 
            <h2 class="divider line one-line">${category}</h2>
        
            `;
        const filteredItems = menuItems.filter(item => item.category === category);

        menuListContainer.appendChild(section);
        filteredItems.forEach(item => {

            const card = document.createElement("div");
            card.classList.add("menu-item");

            card.innerHTML = `
                <h3>
                    ${item.name}
                    <span class="price">S/ ${item.price.toFixed(2)}</span>
                </h3>
                <p>${item.description}</p>
            `;

            section.appendChild(card);
        });

    });
};
getMenu();