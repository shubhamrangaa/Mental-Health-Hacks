window.onload = function () {
  const form = document.moodForm;
  const emotionNote = document.moodForm.emotionNote;
  const submit = document.getElementsByClassName("submit_button");

  submit.onclick = () => {
    console.log(emotionNote.value);
    chrome.storage.sync.set(
      {
        emotionNote: emotionNote.value,
      },
      function () {
        console.log("Value is set to " + emotionNote);
      }
    );
  };

  console.log(emotionNote.value);
};
