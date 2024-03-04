// contentScript.js

function handleImageClick(event) {
    var imgSrc = event.target.src;
    navigator.clipboard.writeText(imgSrc)
      .then(() => {
        console.log('Image source copied to clipboard:', imgSrc);
      })
      .catch(err => {
        console.error('Failed to copy image source:', err);
      });
  }
  
  function startImageListener() {
    document.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
        handleImageClick(event);
      }
    });
  }
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'startImageListener') {
      startImageListener();
    }
  });
  