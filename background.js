// let color = '#000000';
let message = "welcome to codenotes testing 123";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ message });
});
