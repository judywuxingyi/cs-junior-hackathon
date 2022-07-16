// helper function to create element and append to display
function createElement(parent, content, type) {
  const newElement = document.createElement(type);
  newElement.innerHTML = content;
  parent.appendChild(newElement);
  return newElement;
}

chrome.runtime.getBackgroundPage(function (bg) {
  if (bg.sessionDataHTML) {
    document.body.innerHTML = bg.sessionDataHTML;
  }
  setInterval(function () {
    bg.sessionDataHTML = document.body.innerHTML
  }, 1000);

  //do the rest of your work here.

});

document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let saveButton = document.getElementById("save-btn");
  let userInput = document.getElementById("user-input");

  // accesses message from background.js
  chrome.storage.sync.get("message", ({ message }) => {
    const newMessage = createElement(display, message, "div");
    newMessage.setAttribute("class", "messages");
  });

  // testing addEventListener on clicking the save button within extension
  saveButton.addEventListener("click", () => {
    console.log("hello, does this work");
    const highlight = userInput.value; // user input
    console.log(highlight); // check on console
    const highlightEl = createElement(display, highlight, "div"); // append to display
    highlightEl.setAttribute("class", "messages");
    userInput.value = "";

    // let key = (Math.random() + 1).toString(36).substring(7);
    // chrome.storage.local.set({ key: highlight }, function () {
    //   console.log('Value is set to ' + highlight);
    // });

    // chrome.storage.local.get(['key'], function (result) {
    //   console.log('Value currently is ' + result.key);
    // });
  });



  // onclick save button, invoke saveAndUpdate 
  // saveButton.addEventListener("click", async () => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     function: saveAndUpdate,
  //   });
  // });

  // get highlighted text
  function getHighlight() {
    let txt = "";
    if (window.getSelection) {
      txt = window.getSelection().toString();
    } else if (document.getSelection) {
      txt = document.getSelection();
    } else if (document.selection) {
      txt = document.selection.createRange().text;
    }
    return txt;
  };

  // function - save highlighted or selected text to object and update display with
  function saveAndUpdate() {
    console.log("inside saveAndUpdate func");

    // store highlighted text in variable

    // add highlighted text to object with key as date object + value as text

    // update object output on display by invoking displayHighlights()
  }
});






// chrome manifest example
// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }