// first, remove configuration entry in case service is already configured
Meteor.startup(function () {
Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: "153360715055453",
  secret: "4e7e2e7d83713753838fc4a02a29984a"
});

// first, remove configuration entry in case service is already configured
/*Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});
Accounts.loginServiceConfiguration.insert({
  service: "twitter",
  consumerKey: "yourConsumerKey",
  secret: "yourSecret"
});*/

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});
Accounts.loginServiceConfiguration.insert({
  service: "google", clientId:"799441956859msqd4lvbo40kf3u7pnh9rudh8ti19hpl.apps.googleusercontent.com",
  secret: "61yoKcCFDfafZ9Z8nKX_VW61"
});
});