app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/residential/savings-and-energy/savings-tips-and-tools', {
    templateUrl: 'templates/residential/savings-and-energy/savings-tips-and-tools/index.html',
    controller: 'SavingsTipsHomeController'
  });
});

app.controller('SavingsTipsHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Savings Tips and Tools';
  $rootScope.name = 'savings-tips-and-tools';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Savings Tools and Tips';
  $rootScope.metaDescription = 'Learn how to get the most efficient energy usage from your home and save, including our Energy Checkup offering.';
  $rootScope.metaKeywords = 'energy efficiency, savings, heating and cooling, A/C, kitchen, seasonal, home, house, apartment';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/savings-tips-and-tools';
});
