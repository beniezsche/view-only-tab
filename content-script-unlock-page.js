console.log("unlock page called");

// document.removeEventListener("click", stopPropagation);

// var listeners = getEventListeners(document);

// for (var i = 0; i++; i < listeners.length) {
//     console.log(listeners[i])
// }

// clearEventListener(document)

// document.outerHTML = document.outerHTML;

document.addEventListener(
    "click", 
    event => {
        document.dispatchEvent(event);
    },
    true);

// function stopPropagation(event) {
//     event.stopPropagation();
//     event.preventDefault();
// }

// var scripts = document.querySelectorAll("script"); 
// for (var i = 0; i < scripts.length; i++) {
//      if (scripts[i].src === "content-script-lock-page.js") {
//          scripts[i].remove(); 
//     }
// }

// function clearEventListener(element) {
//     const clonedElement = element.cloneNode(true);
//     element.replaceWith(clonedElement);
//     return clonedElement;
// }
