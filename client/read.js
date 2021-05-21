window.onload = () => {
  const section = document.getElementById("logContainer");
  chrome.storage.sync.get(["emotion"], function (result) {
    const emoArray = result.emotion;
    section.innerHTML = emoArray;
  });
};
