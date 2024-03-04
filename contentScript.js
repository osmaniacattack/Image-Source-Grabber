// contentScript.js

function handleElementClick(event) {
  var src;
  if (event.target.tagName === 'IMG') {
    src = event.target.src;
  } else if (event.target.tagName === 'VIDEO') {
    src = event.target.poster;
  }

  if (src) {
    alert('Source URL copied to clipboard:\n' + src);
    navigator.clipboard.writeText(src)
      .then(() => {
        console.log('Source URL copied to clipboard:', src);
      })
      .catch(err => {
        console.error('Failed to copy source URL:', err);
      });
  }
}

function startElementListener() {
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'VIDEO') {
      handleElementClick(event);
    }
  });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'startElementListener') {
    startElementListener();
  }
});
