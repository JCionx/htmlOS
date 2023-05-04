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