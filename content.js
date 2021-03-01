// This receives the message from the background script 

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt)
    // If the extension has been clicked, this if statement is executed
    if (message.txt === "Clicked") {
        document.body.contentEditable = 'true'
    }
}