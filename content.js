// This receives the message from the background script 

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt)
    if (message.txt === "Clicked") {
        document.body.contentEditable = 'true'
    }
}