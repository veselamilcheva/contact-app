  angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    
    var config = {
      apiKey: "AIzaSyDYpJhqeBdGRCj-SBYXLlBgGmpyYXjrr50",
      authDomain: "contact-app-2afd2.firebaseapp.com",
      databaseURL: "https://contact-app-2afd2.firebaseio.com",
      projectId: "contact-app-2afd2",
      storageBucket: "contact-app-2afd2.appspot.com",
      messagingSenderId: "684928170878"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

    firebase.initializeApp(config);
  });