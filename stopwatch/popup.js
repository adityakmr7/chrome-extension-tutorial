console.log('This is from popup')


const currentTime = new Date().toLocaleTimeString();
const displayName = document.getElementById('display_name');
chrome.action.setBadgeText({
    text:currentTime
}, () => {
    console.log('Badge is set')
})
chrome.storage.sync.get(["key"]).then((result) => {
    displayName.textContent = result.key
    displayName.style.fontSize = '18px';
    console.log("Value currently is " + JSON.stringify(result));
});
