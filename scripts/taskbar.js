let menuOpen = false;
let menu = document.getElementById("menu");

function toggleMenu() {
    if (menuOpen) {
        menu.style.display = "none";
        menuOpen = false;
    } else {
        menu.style.display = "block";
        menuOpen = true;
    }
}