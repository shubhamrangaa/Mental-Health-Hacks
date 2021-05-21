window.onload = () => {
  const section = document.getElementById("logContainer");
  chrome.storage.sync.get(["emotionNote"], function (result) {
    section.innerHTML = result.emotionNote;
  });
};
