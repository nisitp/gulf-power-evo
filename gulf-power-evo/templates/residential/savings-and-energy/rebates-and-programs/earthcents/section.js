// EarthCents
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/earthcents', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/earthcents/index.html',
    controller: 'EarthCentsLandingPageController',
  });
});

app.controller('EarthCentsLandingPageController', function ($scope, $rootScope) {
  $rootScope.title = 'EarthCents Home';
  $rootScope.name = 'earth-cents';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'EarthCents Home';
  $rootScope.metaDescription = 'Learn about the benefits of building an EarthCents energy efficient home.';
  $rootScope.metaKeywords = 'earthcents, earth, cents, energy efficient, energy savings, cost savings, savings, sustainable, builder, new home';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});

// Find a Builder
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/earthcents/find-a-builder', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/earthcents/find-a-builder.html',
    controller: 'FindBuilderController',
  });
});

app.controller('FindBuilderController', function ($scope, $rootScope) {
  $rootScope.title = 'Find a Builder';
  $rootScope.name = '';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Participating EarthCents Home Builders';
  $rootScope.metaDescription = 'Locate a contractor in your area who builds EarthCents energy efficient homes.';
  $rootScope.metaKeywords = 'earthcents, energy efficient home, energy savings, cost savings, savings, sustainable, builder, new home';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});
