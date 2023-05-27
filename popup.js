document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('toggleSwitch');
  checkbox.addEventListener('change', function () {
    chrome.storage.sync.set({zerotoheroEnabled: this.checked});
  });

  // Set the checkbox to the current state on popup open
  chrome.storage.sync.get('zerotoheroEnabled', function(data) {
    checkbox.checked = !!data.zerotoheroEnabled;
  });
});
