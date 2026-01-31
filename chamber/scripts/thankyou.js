const params = new URLSearchParams(window.location.search);

document.getElementById("firstName").value = params.get("firstName") || "";
document.getElementById("lastName").value = params.get("lastName") || "";
document.getElementById("email").value = params.get("email") || "";
document.getElementById("phone").value = params.get("phone") || "";
document.getElementById("organization").value = params.get("organization") || "";
document.getElementById("membership").value = params.get("membershipLevel") || "";
document.getElementById("description").value = params.get("description") || "";
document.getElementById("timestamp").value = params.get("timestamp") || "";

document.querySelectorAll("input, textarea, select").forEach(field => {
    field.disabled = true;
});