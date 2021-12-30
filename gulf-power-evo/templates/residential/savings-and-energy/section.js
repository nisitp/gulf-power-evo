// Save Money and Energy
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/residential/savings-and-energy', {
    templateUrl: 'templates/residential/savings-and-energy/index.html',
    controller: 'ResidentialHomeController'
  });
});

// Controllers
app.controller('ResidentialHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Save Money & Energy In Your Home';
  $rootScope.name = 'residential-home';
  $rootScope.classes = 'save-money-and-energy landing-page';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy';
  $rootScope.extraScripts = ['/scripts/one.js']
});
