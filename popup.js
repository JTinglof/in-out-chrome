'use strict';
let changeStatus = document.getElementById('replacerStopStart');

chrome.storage.sync.get('isPaused', function(data){
  
});

changeStatus.onclick = function(element) {
  if (status == 'false') {
    chrome.storage.sync.set({isPaused: 'true'}, function() {
      message("Extension is now paused.");
    });
  } else {
    chrome.storage.sync.set({isPaused: 'false'}, function() {
      message("Extension is now running.");
    });
  }
};
