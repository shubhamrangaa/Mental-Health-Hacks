let date = [""];
let data_display = "";
let emoArray = [""];

date = document.querySelectorAll(".grid-item");
date_display = document.querySelector(".EMO_NOTE_CHILD");

//   getting notes in emoArray
chrome.storage.sync.get(["emotion"], function (result) {
  if (result.emotion) {
    emoArray = result.emotion;
  }
  console.log(emoArray, date, data_display);
});

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".grid-item")) {
      // Run your code to open a modal
      console.log("voila");
      console.log(event.target.textContent);
      const day = event.target.textContent;
      if (emoArray[day]) {
        date_display.textContent = emoArray[day];
      } else {
        date_display.textContent = "No Entries found";
      }
    }
  },
  false
);
