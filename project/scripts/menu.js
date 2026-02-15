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
            ` <h2 class="divider line one-line">${category}</h2>`;
        const itemsWrapper = document.createElement("div");
        itemsWrapper.classList.add("menu-items-wrapper");
        section.appendChild(itemsWrapper);
        //
        const filteredItems = menuItems.filter(item => item.category === category);

        menuListContainer.appendChild(section);

        filteredItems.forEach(item => {

            const card = document.createElement("div");
            card.classList.add("menu-item", `item${item.id}`, "reveal", "slide-down");

            card.innerHTML = `
                    <h3>
                        ${item.name}
                    
                    </h3>
                    <span class="price">S/ ${item.price.toFixed(2)}</span>
                    <p>${item.description}</p>
                `;
            //dialog
            const dialog = document.createElement("dialog");
            dialog.classList.add("menu-dialog", "reveal", "slide-up");
            dialog.innerHTML = `
                <img src="${item.img}" alt="${item.name}" style="width:60%;">
                <h3>${item.name}</h3>
                <span class="price">S/ ${item.price.toFixed(2)}</span>
                <p>${item.description}</p>
                <button class="close-btn">Close</button>
        `;
            document.body.appendChild(dialog);


            card.addEventListener("click", () => {
                observer.observe(dialog)
                dialog.showModal();
            });


            dialog.querySelector(".close-btn").addEventListener("click", () => {
                dialog.close();
            });

            itemsWrapper.appendChild(card);
            observer.observe(card);
        });
        ;

    });

};
getMenu();
