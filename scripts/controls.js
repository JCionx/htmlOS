function quit(element) {
    element.parentElement.parentElement.parentElement.remove();
}

function maximize(element) {
    element.parentElement.parentElement.parentElement.style.width = '100%';
    element.parentElement.parentElement.parentElement.style.height = '100%';
    element.parentElement.parentElement.parentElement.style.top = '0';
    element.parentElement.parentElement.parentElement.style.left = '0';
}