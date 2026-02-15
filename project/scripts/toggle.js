export function toggleFields() {
    const reservationFields = document.querySelector("#reservation-fields");
    const deliveryFields = document.querySelector("#delivery-fields");

    const reservationInfo = document.getElementById("reservation-info");
    const deliveryInfo = document.getElementById("delivery-info");

    document.querySelectorAll('input[name="serviceType"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            if (e.target.value === "reservation") {

                reservationFields.style.display = "block";
                deliveryFields.style.display = "none";


                reservationInfo.style.display = "flex";
                deliveryInfo.style.display = "none";


                document.getElementById("date").required = true;
                document.getElementById("numberPeople").required = true;
                document.getElementById("address").required = false;
            } else {

                reservationFields.style.display = "none";
                deliveryFields.style.display = "block";


                reservationInfo.style.display = "none";
                deliveryInfo.style.display = "block";


                document.getElementById("date").required = false;
                document.getElementById("numberPeople").required = false;
                document.getElementById("address").required = true;
            }
        });
    });
}