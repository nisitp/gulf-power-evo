app.config(function ($routeProvider) {
  $routeProvider.when('/outages', {
    templateUrl: 'templates/outages/index.html',
    controller: 'OutagesPageController'
  });
});

app.controller('OutagesPageController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'Outages';
  $rootScope.name = 'outages-landing-page';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Report and track outages';
  $rootScope.metaDescription = 'We strive to provide uninterrupted service, but when outages occur our teams work to restore power as quickly as possible. Track and report local outages and broken streetlamps';
  $rootScope.metaKeywords = 'outage, power out, no power, streetlight';
});