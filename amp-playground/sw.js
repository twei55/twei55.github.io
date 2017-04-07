'use strict';

function subscribePush() {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
      .then(function(pushSubscription) {
        // Show Notification
        showNotification();
      })
      .catch(function(e) {
        console.error('Unable to register push subscription', e);
      });
  });
}

// Check for permission
function showNotification() {
  if(Notification.permission=='granted') {
      console.log("Permissions granted.");
    // Get service worker to show notification
     self.registration.showNotification("Hello from Babbel Magazine", {
        body: "We have a new article",
        icon: 'favicon.ico'
    });
  }
  else {
    console.log("No permission to show notifications.");
    //We need to ask permission
    Notification.requestPermission(function(permission) {
      if(permission=='granted') {
        self.registration.showNotification("Hello from Babbel Magazine", {
          body: "We have a new article",
          icon: 'favicon.ico'
        });
      }
    });
  }
}
