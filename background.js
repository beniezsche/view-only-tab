chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({text: "OFF",});
});

chrome.tabs.onActivated.addListener((activeInfo) => {

    let tabId = activeInfo.tabId

    chrome.storage.session.get([tabId.toString()]).then((result) => {

        if (Object.keys(result).length === 0) {
            chrome.action.setBadgeText({ text: "OFF", });
        }

        if (result[tabId.toString()] == true) {
            chrome.action.setBadgeText({ text: "ON", });
        }
        else {
            chrome.action.setBadgeText({ text: "OFF", });
        }
    });
})

chrome.action.onClicked.addListener((tab) => {

    chrome.storage.session.get([tab.id.toString()]).then((result) => {

        if (Object.keys(result).length === 0) {

            chrome.scripting.executeScript({
                target : {tabId : tab.id},
                files: ['content-script-lock-page.js']
            });
            
            chrome.storage.session.set({[tab.id.toString()]: true}).then(() => {
                chrome.action.setBadgeText({ text: "ON", });
            });
        }

        console.log(typeof(result[tab.id.toString()]));

        if (result[tab.id.toString()] == true) {

            chrome.tabs.reload(tab.id);

            chrome.storage.session.set({[tab.id.toString()]: false}).then(() => {
                chrome.action.setBadgeText({ text: "OFF", });
            });
        }
        else {

            chrome.scripting.executeScript({
                target : {tabId : tab.id},
                files: ['content-script-lock-page.js']
            });
            
            chrome.storage.session.set({[tab.id.toString()]: true}).then(() => {
                chrome.action.setBadgeText({ text: "ON", });
            });
        }
    });
});