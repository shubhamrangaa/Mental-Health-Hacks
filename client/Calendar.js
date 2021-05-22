let date = [""];
let data_display = "";
let emoArray = [""];

window.onload = () => {
  date = document.querySelectorAll(".grid-item");
  date_display = document.querySelector(".EMO_NOTE_CHILD");

  //   getting notes in emoArray
  chrome.storage.sync.get(["emotion"], function (result) {
    if (result.emotion) {
      emoArray = result.emotion;
    }
    console.log(emoArray, date, data_display);
  });

  //   date[1].onclick = () => {
  //     date_display.textContent = emoArray[1];
  //   };
};

if (date[1]) {
  for (i = 2; i < 30; i++) {
    console.log(emoArray[i]);
    console.log("hel");
    date[i].onclick = () => {
      date_display.textContent = emoArray[i];
    };
  }
}
