// Here the message is received from popup.js 
chrome.runtime.onMessage.addListener(msgObj => {
    if (msgObj === 'Clicked') {
        console.log("CLICKSED")
    }
});