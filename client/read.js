window.onload = () => {
  const section = document.getElementById("logContainer");
  chrome.storage.sync.get(["emotion"], function (result) {
    const emoArray = result.emotion;
    for (i = 1; i < emoArray.length; i++) {
      var tag = document.createElement("p");
      var text = document.createTextNode(emoArray[i]);
      tag.appendChild(text);
      var tagDate = document.createElement("h4");
      var dateText = document.createTextNode(`${i} May 2021`);
      tagDate.appendChild(dateText);
      section.appendChild(tagDate);
      section.appendChild(tag);
    }
  });
};
