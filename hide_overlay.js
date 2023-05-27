console.log('i loaded')

if (chrome.storage) {
  chrome.storage.onChanged.addListener(function(changes, namespace) {
      if (changes.hideOverlay) {
        console.log('hideOverlay changed to ' + changes.hideOverlay.newValue)
        if (changes.hideOverlay.newValue) {
          // Add the CSS if it's not already present
          if (!document.getElementById('hideOverlayStyle')) {
            var style = document.createElement('style');
            style.id = 'hideOverlayStyle';
            style.textContent = '.ytp-pause-overlay { display: none !important; }';
            document.head.appendChild(style);
            console.log({style})
          }
        } else {
          // Remove the CSS if present
          var style = document.getElementById('hideOverlayStyle');
          if (style) {
            style.remove();
          }
        }
      }
    });
    
    // Check the initial state on load
    chrome.storage.sync.get('hideOverlay', function(data) {
      console.log({data})
      if (data.hideOverlay) {
        var style = document.createElement('style');
        style.id = 'hideOverlayStyle';
        style.textContent = '.ytp-pause-overlay { display: none !important; }';
        document.head.appendChild(style);
      }
    });
} else {
  console.log('chrome.storage is not available');
}
