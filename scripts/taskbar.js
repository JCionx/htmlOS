let menuOpen = false;
let menu = document.getElementById("menu");
let menuApps = document.getElementById("user-apps");
let taskbar = document.querySelector(".taskbar-apps");
let wifiLogo = document.getElementById("wifi-logo");
let wifiTooltip = document.querySelector(".taskbar-div .taskbar-end .tooltip span");

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
    clonedApp.setAttribute("ondragend", "this.parentNode.removeChild(this)")
    taskbar.appendChild(clonedApp);
}

function addToMenu(icon, title, URL) {
    const app = document.getElementById("menu-app");
    const clonedApp = app.cloneNode(true);
    clonedApp.setAttribute("id", " ");
    clonedApp.setAttribute("src", icon);
    clonedApp.setAttribute("onclick", `openWindow("${icon}", "${title}", "${URL}")`);
    clonedApp.setAttribute("ondragend", "this.parentNode.removeChild(this)")
    clonedApp.setAttribute("oncontextmenu", `addToTaskbar("${icon}", "${title}", "${URL}")`);
    menuApps.appendChild(clonedApp);
}

let notification = document.getElementById('notification');
let notificationClose = document.getElementById('notification-close');
let notificationActive = false;

function fadeInElement(element) {
    element.style.opacity = 0;
    element.style.display = "block";
    (function fade() {
        var val = parseFloat(element.style.opacity);
        if (!((val += .1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function fadeOutElement(element) {
    element.style.opacity = 1;
    (function fade() {
        if ((element.style.opacity -= .1) < 0) {
            element.style.display = "none";
            element.style.opacity = 1;
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function showNotification(title, text, timeout) {
    if (timeout < 300) {
        timeout = 300;
    }
    if (!notificationActive) {
        notificationActive = true;
        fadeInElement(notification);
        notification.querySelector('.notification-title').innerHTML = title;
        notification.querySelector('.notification-text').innerHTML = text;
        setTimeout(() => {
            fadeOutElement(notification);
            notificationActive = false;
        }, timeout);
    }
}

notificationClose.addEventListener('click', () => {
    fadeOutElement(notification);
    notificationActive = false;
});

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

window.addEventListener('online', () => {
    wifiLogo.setAttribute("src", "assets/wifi.png");
    wifiTooltip.innerHTML = "Connected to the Internet";
});
window.addEventListener('offline', () => {
    wifiLogo.setAttribute("src", "assets/nowifi.png");
    wifiTooltip.innerHTML = "Not connected to the Internet";
});
  
loadStartup();