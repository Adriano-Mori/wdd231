const modal = document.querySelectorAll('.open-modal')
const closeModal = document.querySelectorAll('.close-modal')
modal.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const dialog = document.querySelector(link.getAttribute("data-modal"));
        dialog.showModal();
    });
});

closeModal.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});
const dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
});

document.querySelector("#timestamp").value = new Date().toISOString();