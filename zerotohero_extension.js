if (chrome.storage) {
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (changes.zerotoHeroEnabled) {
      if (changes.zerotoHeroEnabled.newValue) {
        // Add the CSS if it's not already present
        if (!document.getElementById("zerotoHeroExtensionStyle")) {
          var style = document.createElement("style");
          style.id = "zerotoHeroExtensionStyle";
          style.textContent =
            ".ytp-pause-overlay { display: none !important; }";
          document.head.appendChild(style);
          console.log({ style });
        }
      } else {
        // Remove the CSS if present
        var style = document.getElementById("zerotoHeroExtensionStyle");
        if (style) {
          style.remove();
        }
      }
    }
  });

  // Check the initial state on load
  chrome.storage.sync.get("zerotoHeroEnabled", function (data) {
    console.log({ data });
    if (data.zerotoHeroEnabled) {
      var style = document.createElement("style");
      style.id = "zerotoHeroExtensionStyle";
      style.textContent = ".ytp-pause-overlay { display: none !important; }";
      document.head.appendChild(style);
    }
  });
} else {
  console.log("chrome.storage is not available");
}
