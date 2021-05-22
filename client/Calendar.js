window.onload = () => {
  const date = document.querySelectorAll(".grid-item");
  const date_display = document.querySelector(".EMO_NOTE_CHILD");
  let emoArray = [""];

  //   getting notes in emoArray
  chrome.storage.sync.get(["emotion"], function (result) {
    if (result.emotion) {
      emoArray.push(result.emotion);
    }
  });
  //   test
  for (i = 0; i < 10; i++) {
    console.log(date[i].textContent);
    // console.log(emoArray[i]);
  }
  //
  //   for (i = 0; i < 30; i++) {
  //     console.log(emoArray[i]);
  //     date[i].onClick = () => {
  //       date_display.textContent = emoArray[i];
  //     };
  //   }
  date[0].onclick = () => {
    console.log("jel");
    console.log(emoArray[6]);
    date_display.textContent = emoArray[1];
  };
};
