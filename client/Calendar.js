window.onload = () => {
  const date = document.querySelectorAll(".grid-item");
  const date_display = document.querySelector(".EMO_NOTE_CHILD");
  let emoArray = [""];

  //   getting notes in emoArray
  chrome.storage.sync.get(["emotion"], function (result) {
    if (result.emotion) {
      emoArray = result.emotion;
    }
  });

  date[1].onclick = () => {
    date_display.textContent = emoArray[1];
  };
};
