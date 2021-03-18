// Here the message is received from popup.js
chrome.runtime.onMessage.addListener(msgObj => {
    if (msgObj === 'Clicked') {

        // console.log("HACK BUTTON CLICKED")

        // Make the webpage editable (HACKED)
        document.body.contentEditable = 'true'

        // This turns off spellcheck
        document.body.setAttribute('spellcheck', false)

        console.log("WEBSITE HACKED 🚀")
        alert("WEBSITE HAS BEEN HACKED 🚀")

        // console.log("This tool has been created by @VirejDasani")
    }
})
