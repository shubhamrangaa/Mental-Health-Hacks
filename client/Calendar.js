window.onload = () => {
    const bakchod = document.querySelectorAll(".grid-item");
    const bakchod_display = document.querySelector("EMO_NOTE_CHILD");
    for( i=0; i<30; i++){

    bakchod[i].onClick = () => {
        chrome.storage.sync.get(["emotion"], function (result) {
        const emoArray = result.emotion;
        bakchod_display.innerHTML = emoArray[i];

        });
    }

    }
}
