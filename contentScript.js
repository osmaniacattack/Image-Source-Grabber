// contentScript.js

function handleImageClick(event) {
  var src;
  if (event.target.tagName === 'IMG') {
    src = event.target.src;
  } else if (event.target.tagName === 'VIDEO') {
    src = event.target.poster;
  }

  if (src) {
    alert('Source URL copied to clipboard:\n\n' + src);
    navigator.clipboard.writeText(src)
      .then(() => {
        console.log('Source URL copied to clipboard:', src);
      })
      .catch(err => {
        console.error('Failed to copy source URL:', err);
      });
  }
}

function startImageListener() {
  document.addEventListener('click', function(event) {
    console.log('click');
    if (event.target.tagName === 'IMG' || event.target.tagName === 'VIDEO') {
      handleImageClick(event);
    }
  });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'startImageListener') {
    startImageListener();
  }
});
