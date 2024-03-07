// background.js

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'openNewTab') {
      chrome.tabs.create({ url: message.url }); // Open a new tab with the specified URL
    }
  });
  