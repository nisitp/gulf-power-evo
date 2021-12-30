// About Us
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us', {
    templateUrl: 'templates/about-us/index.html',
    controller: 'AboutUsHomeController'
  });
});

app.controller('AboutUsHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'About Us';
  $rootScope.name = 'about-us';
  $rootScope.classes = 'landing-page about-us-home-page';
  $rootScope.metaTitle = 'About Us';
  $rootScope.metaDescription = 'Learn about the company, past and present, and how Gulf Power is dedicated to serving the community through a variety of initiatives and offerings.';
  $rootScope.metaKeywords = 'Gulf Power, about Gulf Power, company history Gulf Power, corporate information Gulf Power';
});

// Economic Development
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/economic-development', {
    templateUrl: 'templates/about-us/economic-development.html',
    controller: 'EconomicDevelopmentController'
  });
});

app.controller('EconomicDevelopmentController', function ($scope, $rootScope) {
  $rootScope.title = 'Economic Development';
  $rootScope.name = 'economic-development';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// Careers
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/careers', {
    templateUrl: 'templates/about-us/careers.html',
    controller: 'CareersController'
  });
});

app.controller('CareersController', function ($scope, $rootScope) {
  $rootScope.title = 'Careers';
  $rootScope.name = 'careers';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Careers';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// En Español
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/espanol', {
    templateUrl: 'templates/about-us/espanol.html',
    controller: 'EnEspañolController'
  });
});

app.controller('EnEspañolController', function ($scope, $rootScope) {
  $rootScope.title = 'Ahorre dinero y energía';
  $rootScope.name = 'in-spanish';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Ahorre dinero y energía';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});
