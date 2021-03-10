var msgObj = "Clicked"

// This is executed when the hack button is clicked
document.getElementById('hackButton').addEventListener('click', function () {
    // This sends a message to content.js from where it receives it
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, msgObj);
        })
    })
})