// let color = '#000000';


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.clear();

    // let message = "";
    // chrome.storage.sync.set({ message });
});

chrome.browserAction.onClick.addListener(() => {

  chrome.storage.sync.get(null, function(messages) {
    let allMessages = Object.entries(messages);
    for (const [key, value] of allMessages) {
      console.log(key + ": " + value);
      const newMessage = createElement(display, value, "div");
      newMessage.setAttribute("class", "messages");
    }
  });
});