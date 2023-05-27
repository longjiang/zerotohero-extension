document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('toggleSwitch');
  checkbox.addEventListener('change', function () {
    chrome.storage.sync.set({hideOverlay: this.checked});
  });

  // Set the checkbox to the current state on popup open
  chrome.storage.sync.get('hideOverlay', function(data) {
    checkbox.checked = !!data.hideOverlay;
  });
});
