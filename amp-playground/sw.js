'use strict';

if ('showNotification' in ServiceWorkerRegistration.prototype) {
  navigator.serviceworker.ready
  .then(registration => {
    return registration.pushManager.subscribe({userVisibleOnly: true});
  })
  .then(subscription => {
    showNotification();
  })
  .catch(error => {
    console.log("Subscribing to push notifications failed.");
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


