let stateCheckBox = document.getElementById("statecheckbox");
let checkBoxLabel = document.getElementById("checkboxlabel");

function makePageViewOnly() {
    document.addEventListener(
        "click", 
        event => {
            stopPropagation(event);
        },
        true);
}

function stopPropagation(event) {
    event.stopPropagation();
    event.preventDefault();
}


stateCheckBox.addEventListener("change", () => {
    // let queryOptions = { active: true, lastFocusedWindow: true };
    // // `tab` will either be a `tabs.Tab` instance or `undefined`.
    // let [tab] = chrome.tabs.query(queryOptions);

    console.log("event listener called from content")

    let stateText = stateCheckBox.checked ? "ON" : "OFF" 
    checkBoxLabel.innerText = stateText

    chrome.tabs.getCurrent((tab) => {
        chrome.scripting.executeScript({
            target : {tabId : tab.id},
            function : makePageViewOnly,
        });
    })

    // chrome.scripting.executeScript({
    //     target : {tabId : tab.id},
    //     function : makePageViewOnly,
    // });

}, "true")

