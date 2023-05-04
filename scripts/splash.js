let splashDiv = document.getElementById("splash");
let splashImg = document.getElementById("splash-img");

function splash() {
    setTimeout(function(){
        fadeInElement(splashImg);
    },100);

    setTimeout(function(){
        fadeOutElement(splashDiv);
    },2000);
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

splash();