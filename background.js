// // This runs in the background
// console.log("Background script active!")

// // This is the onclick listener for clicking the extension button in the extensions bar
// chrome.browserAction.onClicked.addListener(buttonClicked)

// // This is executed when the extension is clicked in the extension bar
// function buttonClicked(tab) {
//     console.log("Button Clicked")
//     console.log(tab)


//     let msg = {
//         txt: "Clicked"
//     }
//     // This is to send a message to the content script
//     // It sends the MSG below to the active tab (tab.id)
//     chrome.tabs.sendMessage(tab.id, msg)
//     // This message is received in the content script
// }