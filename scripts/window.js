const windows = []

function openWindow(icon, title, URL) {
    const window = document.getElementById("window");
    windows.push(window.cloneNode(true));
    const clonedWindow = windows[windows.length - 1];
    clonedWindow.setAttribute("id", "window" + windows.length);
    clonedWindow.querySelector(".window-header").setAttribute("id", "window" + windows.length + "-header");
    clonedWindow.querySelector(".window-title").innerHTML = title;
    clonedWindow.querySelector(".window-icon").setAttribute("src", icon);
    clonedWindow.querySelector(".iframe").setAttribute("src", URL);
    document.body.appendChild(clonedWindow);
    dragElement(document.getElementById(clonedWindow.id));
    closeMenu();
}

dragElement(document.getElementById("window"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
} else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
}
}

function changeWallpaper(url) {
    document.body.style.backgroundImage = "url('" + url + "')";
}

function setStartup(code) {
    // Store the code in localStorage.
    console.log(code);
    localStorage.setItem("startupCode", code);
}
  
function loadStartup() {
    // Get the code from localStorage.
    const code = localStorage.getItem("startupCode");
    console.log(code);
  
    // If there is code, execute it.
    if (code) {
        eval(code);
    }
}


loadStartup();
document.addEventListener('contextmenu', event => event.preventDefault());