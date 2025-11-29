chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: {
      	tabId: tab.id
      },
      files: [
        "scripts/wikiTree.js",
        "scripts/extract.js"
      ]
    });

    chrome.tabs.sendMessage(tab.id, {action: "extractMemorials"});
  } catch (err) {
    console.error(`Failed to execute script: ${err}`);
  }
});