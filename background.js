chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    contexts: ["all"],
    id: "copyContents",
    title: "Copy Dropdown Contents",
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.storage.local.get(["dropdownContents"], (items) => {
    const { dropdownContents } = items;
    if (dropdownContents) {
      chrome.tabs.sendMessage(tab.id, dropdownContents);
    }
  });
});
