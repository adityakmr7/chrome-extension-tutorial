const userInput = document.getElementById('name_input');
const saveBtn = document.getElementById('save');


saveBtn.addEventListener('click', () => {
    chrome.storage.sync.set({ key: userInput.value }).then(() => {
        console.log("Value is set");
    });

})
