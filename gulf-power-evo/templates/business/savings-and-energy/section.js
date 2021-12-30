// Business
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy', {
    templateUrl: 'templates/business/savings-and-energy/index.html',
    controller: 'BusinessHomeController'
  });
});

app.controller('BusinessHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Save Money and Energy';
  $rootScope.name = 'business-home';
  $rootScope.classes = 'save-money-and-energy landing-page';
  $rootScope.metaTitle = 'Save Money and Energy at Your Business';
  $rootScope.title = 'Save Money and Energy at Your Business';
  $rootScope.metaDescription = 'Energy saving tips, rebate offers, special electricity rates and more &mdash; Gulf Power offers many ways to save money and energy at your business.';
  $rootScope.metaKeywords = 'Save energy, lower power bills, energy tips, rebates, incentives, energy efficiency, savings, power bill, energy usage, energy rates';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';
  $rootScope.extraScripts = ['/scripts/two.js']
});
