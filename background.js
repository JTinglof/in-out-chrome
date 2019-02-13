chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({isPaused: 'false'}, function() {
        console.log('Extension started.');
      });
  });