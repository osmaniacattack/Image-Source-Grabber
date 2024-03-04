// contentScript.js

function handleImageClick(event) {
  var imgSrc = event.target.src;
  console.log(imgSrc);
  alert('Image source copied to clipboard:\n\n' + imgSrc);
  navigator.clipboard.writeText(imgSrc)
    .catch(err => {
      console.error('Failed to copy image source:', err);
    });
}

function startImageListener() {
  document.addEventListener('click', function(event) {
    console.log('click');
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
