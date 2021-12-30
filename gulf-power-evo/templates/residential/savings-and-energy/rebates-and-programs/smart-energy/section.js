// Smart Energy
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/smart-energy', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/smart-energy/index.html',
    controller: 'SmartEnergyController'
  });
});

app.controller('SmartEnergyController', function ($scope, $rootScope) {
  $rootScope.title = 'Smart Energy';
  $rootScope.name = 'smart-energy';
  $rootScope.classes = 'smart-energy';
  $rootScope.metaTitle = 'Smart Energy';
  $rootScope.metaDescription = 'Learn more about the new Smart Meters that may have been (or will be installed) at your home.';
  $rootScope.metaKeywords = 'smart meter, energy efficiency, smart energy, sustainability, home, energy bill, savings';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});
