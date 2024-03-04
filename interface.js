document.addEventListener('DOMContentLoaded', function() {
    console.log('Document has loaded');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "startImageListener"});
    });
  });
  