document.addEventListener("contextmenu", ({ target }) => {
  if (target.tagName === "SELECT") {
    const dropdownContents = [...target.getElementsByTagName("option")]
      .map((optionElement) => optionElement.textContent)
      .join("\n");
    chrome.storage.local.set({ dropdownContents });
  }
});

chrome.runtime.onMessage.addListener(function (message) {
  navigator.clipboard.writeText(message).catch((error) => {
    console.error(error.message);
  });
});
