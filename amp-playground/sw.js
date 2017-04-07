'use strict';

if ('showNotification' in ServiceWorkerRegistration.prototype) {
  navigator.serviceworker.ready
  .then(registration => {
    return registration.pushManager.subscribe({userVisibleOnly: true});
  })
  .then(subscription => {
    // Do something with the subscription.
  })
  .catch(error => {
    // Do something with the error.
  });
}

// Check for permission
if(Notification.permission=='granted') {
  // Get service worker to show notification
   self.registration.showNotification("Hello from Babbel Magazine", {
      body: "We have a new article",
      icon: 'favicon.ico'
  });
}
else {
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


