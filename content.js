// Here the message is received from popup.js 
chrome.runtime.onMessage.addListener(msgObj => {
    if (msgObj === 'Clicked') {
        console.log("HACK BUTTON CLICKED")

        // Make the webpage editable (HACKED)
        document.body.contentEditable = 'true'
        console.log("WEBSITE HACKED 🚀")
    }
});