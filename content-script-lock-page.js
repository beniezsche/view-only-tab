document.addEventListener(
    "click", 
    event => {
        stopPropagation(event);
    },
    true);

function stopPropagation(event) {
    event.stopPropagation();
    event.preventDefault();
}
