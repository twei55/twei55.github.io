'use strict';

if ('showNotification' in ServiceWorkerRegistration.prototype) {
  navigator.serviceworker.ready
  .then(registration => {
    return registration.pushManager.subscribe({
      userVisibleOnly: true
    });
  })
  .then(subscription => {
    // Do something with the subscription.
  })
  .catch(error => {
    // Do something with the error.
  });
}

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'Hello from Babbel Magazine.';
  var body = 'We have a new article';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
    })
  );
});


