console.log('This is from popup')


const currentTime = new Date().toLocaleTimeString();

chrome.action.setBadgeText({
    text:currentTime
}, () => {
    console.log('Badge is set')
})
