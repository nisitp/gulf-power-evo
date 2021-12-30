// Surge Protection
app.config(function ($routeProvider) {
  // Landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/surge-protection', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/surge-protection/index.html',
    controller: 'SurgeProtectionHomeController',
  });
});

app.controller('SurgeProtectionHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Surge Protection';
  $rootScope.name = 'surge-protection-home';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Safeguard Your Home with Surge Protection';
  $rootScope.metaDescription = 'Learn why and how to get surge protection for your home.';
  $rootScope.metaKeywords = 'surge, surge protection, electric, appliances, computers, electronics, surge protection plans';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});

// Basic Signup
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/surge-protection/basic-signup', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/surge-protection/basic-signup.html',
    controller: 'BasicSignupController',
  });
});

app.controller('BasicSignupController', function ($scope, $rootScope) {
  $rootScope.title = 'Basic Surge Protection Signup';
  $rootScope.name = 'basic-signup';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});

// Premium Signup
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/surge-protection/premium-signup', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/surge-protection/premium-signup.html',
    controller: 'PremiumSignupController',
  });
});

app.controller('PremiumSignupController', function ($scope, $rootScope) {
  $rootScope.title = 'Premium Surge Protection Signup';
  $rootScope.name = 'premium-signup';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});
