// Rebates and Programs
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/appliances', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/appliances/index.html',
    controller: 'AppliancesLandingPageController',
  });
});

// Controllers
app.controller('AppliancesLandingPageController', function ($scope, $rootScope) {
  $rootScope.title = 'Appliances';
  $rootScope.name = 'appliances';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Appliances';
  $rootScope.metaDescription = 'Learn more about energy efficient and cost saving appliance models, and apply for rebates.';
  $rootScope.metaKeywords = 'appliances, washer, dryer, dishwasher, air conditioning, window A/C, window unit, rebates, energy efficient, Energy Star, cost saving';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});
