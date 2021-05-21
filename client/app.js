window.onload = function () {
  const form = document.moodForm;
  const emotionNote = document.moodForm.emotionNote;
  const submit = document.getElementById("formSubmit");

  let emoArray = [""];

  chrome.storage.sync.get(["emotion"], function (result) {
    if (result.emotion) {
      emoArray.push(result.emotion);
    }
  });

  submit.onclick = () => {
    console.log(emotionNote.value);
    emoArray.push(emotionNote.value);
    chrome.storage.sync.set(
      {
        emotion: emoArray,
      },
      function () {
        console.log("Value is set to " + emotionNote);
      }
    );
  };

  console.log(emotionNote.value);
};
