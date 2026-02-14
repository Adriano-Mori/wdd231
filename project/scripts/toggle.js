const reservationFields = document.querySelector("#reservation-fields");
const deliveryFields = document.querySelector("#delivery-fields");
const extraInfo = document.getElementById("service-extra-info");
document.querySelectorAll('input[name="serviceType"]').forEach(radio => {
    radio.addEventListener("change", (e) => {

        if (e.target.value === "reservation") {
            reservationFields.style.display = "block";
            deliveryFields.style.display = "none";
            extraInfo.innerHTML = `
                <section class="locations-info">
                    <h3>Available Locations</h3>
                    <ul>
                        <li>Lima</li>
                        <li>Trujillo</li>
                        <li>Arequipa</li>
                    </ul>
                </section>
            `;

            // Required control
            document.getElementById("date").required = true;
            document.getElementById("numberPeople").required = true;
            document.getElementById("address").required = false;

        } else {
            reservationFields.style.display = "none";
            deliveryFields.style.display = "block";
            extraInfo.innerHTML = `
                <section class="delivery-options">
                <h2>Order through our delivery partners</h2>
                <img src="images/glovo.png" >
                <img src="images/pedidosya.png" >
                <img src="images/ubereats.png" >
                <img src="images/llamafood.png" >
                <img src="images/rappi.png" >
                </section>`;

            document.getElementById("date").required = false;
            document.getElementById("numberPeople").required = false;
            document.getElementById("address").required = true;
        }

    });
});


