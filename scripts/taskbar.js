let menuOpen = false;
let menu = document.getElementById("menu");
let menuApps = document.getElementById("user-apps");
let taskbar = document.querySelector(".taskbar-apps");

function toggleMenu() {
    if (menuOpen) {
        menu.style.display = "none";
        menuOpen = false;
    } else {
        menu.style.bottom = document.getElementById("taskbar-div").clientHeight + 10 + "px";
        menu.style.display = "block";
        menuOpen = true;
    }
}

function closeMenu() {
    menu.style.display = "none";
    menuOpen = false;
}

function addToTaskbar(icon, title, URL) {
    const app = document.getElementById("taskbar-app");
    const clonedApp = app.cloneNode(true);
    clonedApp.setAttribute("id", " ");
    clonedApp.setAttribute("src", icon);
    clonedApp.setAttribute("onclick", `openWindow("${icon}", "${title}", "${URL}")`);
    taskbar.appendChild(clonedApp);
}

function addToMenu(icon, title, URL) {
    const app = document.getElementById("menu-app");
    const clonedApp = app.cloneNode(true);
    clonedApp.setAttribute("id", " ");
    clonedApp.setAttribute("src", icon);
    clonedApp.setAttribute("onclick", `openWindow("${icon}", "${title}", "${URL}")`);
    menuApps.appendChild(clonedApp);
}

function changeWallpaper(url) {
    document.body.style.backgroundImage = "url('" + url + "')";
}

function setStartup(code) {
    // Store the code in localStorage.
    localStorage.setItem("startupCode", code);
}
  
function loadStartup() {
    // Get the code from localStorage.
    const code = localStorage.getItem("startupCode");
  
    // If there is code, execute it.
    if (code) {
        eval(code);
    }
}

loadStartup();