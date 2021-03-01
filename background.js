// This file runs in the background to detect when a new tab is opened where the code in content.js can be injected
chrome.browserAction.onClicked.addListener(
    function (tab) {
        chrome.tabs.executeScript(tab.id, {
            "file": "content.js"
        });
    });