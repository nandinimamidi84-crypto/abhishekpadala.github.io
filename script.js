function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}

function showContact() {
    document.getElementById("contactPopup").style.display = "flex";
}

function closeContact() {
    document.getElementById("contactPopup").style.display = "none";
}
function openPortfolioPDF() {
    window.open("graphic design.pdf", "_blank");
}