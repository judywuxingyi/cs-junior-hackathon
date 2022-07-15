let highlights = {};

// stores chrome extension display in a variable
let display = document.getElementById("display");

// stores chrome ext button in a variable
let saveButton = document.getElementById("save-button");

// onclick save button, invoke saveAndUpdate 
saveButton.addEventListener("click", () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: saveAndUpdate,
  });
});

// function - display all current highlights
function displayHighlights() {
  // iterate through highlights object
    // create div element
    // assign innerText of div element to display
    // append child to display
}

// function - save highlighted or selected text to object and update display with 
function saveAndUpdate() {
  // get highlighted text
  function getHighlight() {
    let txt = "";
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (document.getSelection) {
        txt = document.getSelection();
    } else if (document.selection) {
        txt = document.selection.createRange().text;
    }
    return txt;
  };

  // store highlighted text in variable
  const text = getHighlight();
  
  // add highlighted text to object with key as date object + value as text
  // let now = new Date();
  // highlights[now.toDateString()] = text;

  // update object output on display by invoking displayHighlights()
  // return displayHighlights();

}





// chrome manifest example
// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }