// Electric Safety
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/safety', {
    templateUrl: 'templates/about-us/safety/index.html',
    controller: 'SafetyHomeController'
  });
});

app.controller('SafetyHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Safety';
  $rootScope.name = 'safety';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Safety';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// Rights of Way
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/safety/rights-of-way', {
    templateUrl: 'templates/about-us/safety/rights-of-way.html',
    controller: 'RightsofWayController'
  });
});

app.controller('RightsofWayController', function ($scope, $rootScope) {
  $rootScope.title = 'Rights of Way';
  $rootScope.name = '';
  $rootScope.classes = 'rights-of-way';
  $rootScope.metaTitle = 'Rights-of-Way';
  $rootScope.metaDescription = 'Safely maintain power lines by educating and providing information on our easements and allowable uses.';
  $rootScope.metaKeywords = 'Rights of way, easement, power line use, encroachment';
});

// Safety City
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/safety/safety-city', {
    templateUrl: 'templates/about-us/safety/safety-city.html',
    controller: 'SafetyCityController'
  });
});
app.controller('SafetyCityController', function ($scope, $rootScope) {
  $rootScope.title = 'Safety City';
  $rootScope.name = 'safety-city';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});
