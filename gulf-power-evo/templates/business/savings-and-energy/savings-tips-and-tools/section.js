app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/savings-tips-and-tools', {
    templateUrl: 'templates/business/savings-and-energy/savings-tips-and-tools/index.html',
    controller: 'BusinessSavingTipsandToolsController'
  });
});

app.controller('BusinessSavingTipsandToolsController', function ($scope, $rootScope) {
  $rootScope.title = 'Savings Tips and Tools';
  $rootScope.name = 'business-savings-tips-and-tools';
  $rootScope.classes = 'landing-page';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/savings-tips-and-tools';
});
