// Investing in the Future
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/about-us/investing-in-the-future', {
    templateUrl: 'templates/about-us/investing-in-the-future/index.html',
    controller: 'InvestingInTheFutureController'
  });
});

app.controller('InvestingInTheFutureController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'Investing in the Future of Northwest Florida';
  $rootScope.name = 'investing-in-the-future';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Investing in the future and long-term reliability of Northwest Florida\'s energy infrastructure';
  $rootScope.metaDescription = 'Learn about Gulf Power’s request with the Florida Public Service Commission to invest in the long-term reliability of Northwest Florida’s energy infrastructure.';
  $rootScope.metaKeywords = '';
});