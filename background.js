chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
});

let map = new Map()

chrome.tabs.onActivated.addListener((activeInfo) => {

    let tabId = activeInfo.tabId

    if(map.has(tabId)) {

        if(map.get(tabId)) {
            chrome.action.setBadgeText({
                text: "ON",
            });
        }
        else {
            chrome.action.setBadgeText({
                text: "OFF",
            });
        }
    }
    else {
        chrome.action.setBadgeText({
            text: "OFF",
        });
    }
})

chrome.action.onClicked.addListener((tab) => {

    if(map.has(tab.id)) {
        // chrome.scripting.executeScript({
        //     target : {tabId : tab.id},
        //     files: ['content-script-unlock-page.js']
        // });
        chrome.tabs.reload(tab.id);
        chrome.action.setBadgeText({
            text: "OFF",
        });
        map.set(tab.id, false)
    }
    else {
        map.set(tab.id, true)

        chrome.scripting.executeScript({
        target : {tabId : tab.id},
        files: ['content-script-lock-page.js']
        });
        chrome.action.setBadgeText({
            text: "ON",
        });
    }
});

function unlockPage() {
    document.removeEventListener(
        "click", 
        stopPropagation,
    );
}


function lockPage() {
    document.addEventListener(
        "click", 
        event => {
            stopPropagation(event);
        },
        true
    );
}

function stopPropagation(event) {
    event.stopPropagation();
    event.preventDefault();
}

// console.log("cs is being called");