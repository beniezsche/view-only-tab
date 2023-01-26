// // Get all input elements on the page
// var inputs = document.getElementsByTagName("input");

// // Disable all input elements
// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].disabled = true;
// }

// // Get all textarea elements on the page
// var textareas = document.getElementsByTagName("textarea");

// // Disable all textarea elements
// for (var i = 0; i < textareas.length; i++) {
//     textareas[i].disabled = true;
// }

// // Get all buttons on the page
// var buttons = document.getElementsByTagName("button");

// // Disable all buttons
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].disabled = true;
// }

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
