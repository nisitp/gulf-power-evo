// Commercial Surge Protection
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/commercial-surge-protection', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/commercial-surge-protection/index.html',
    controller: 'CommercialSurgeProtectionController'
  });
});

app.controller('CommercialSurgeProtectionController', function ($scope, $rootScope) {
  $rootScope.title = 'Commercial Surge Protection';
  $rootScope.name = 'commercial-surge-protection';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Commercial Surge Protection';
  $rootScope.metaDescription = 'Learn why and how to get surge protection for your business.';
  $rootScope.metaKeywords = 'surge, surge protection, electric, appliances, computers, electronics, surge protection plans';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/surge-protection';
});

// Commercial Surge Protection Sign-up
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/commercial-surge-protection/commercial-surge-protection-signup', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/commercial-surge-protection/commercial-surge-protection-sign-up.html',
    controller: 'CommercialSurgeProtectionSignupController'
  });
});

app.controller('CommercialSurgeProtectionSignupController', function ($scope, $rootScope) {
  $rootScope.title = 'Commercial Surge Protection Signup';
  $rootScope.name = 'commercial-surge-protection-signup';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/surge-protection';
});
