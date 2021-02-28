// This file runs in the background to detect when to execute the code in the 
chrome.browserAction.onClicked.addListener(
    function (tab) {
        chrome.tabs.executeScript(tab.id, {
            "file": "content.js"
        });
    });