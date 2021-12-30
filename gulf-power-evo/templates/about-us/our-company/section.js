// Our Company
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/about-us/our-company', {
    templateUrl: 'templates/about-us/our-company/index.html',
    controller: 'AboutUsOurCompanyController'
  });
});

app.controller('AboutUsOurCompanyController', function ($scope, $rootScope) {
  $rootScope.title = 'Our Company';
  $rootScope.name = 'our-company';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// Supplier Registration
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/our-company/supplier-registration', {
    templateUrl: 'templates/about-us/our-company/supplier-registration.html',
    controller: 'SupplierRegistrationController'
  });
});

app.controller('SupplierRegistrationController', function ($scope, $rootScope) {
  $rootScope.title = 'Supplier Registration';
  $rootScope.name = 'supplier-registration';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// Leadership Governance
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/our-company/leadership-and-governance-profiles', {
    templateUrl: 'templates/about-us/our-company/leadership-and-governance-profiles.html',
    controller: 'LeadershipGovernanceController'
  });
});

app.controller('LeadershipGovernanceController', function ($scope, $rootScope) {
  $rootScope.title = 'Leadership and Governance Profiles';
  $rootScope.name = 'leadership-and-governance-profiles';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// Working With Us
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/our-company/working-with-us', {
    templateUrl: 'templates/about-us/our-company/working-with-us.html',
    controller: 'WorkingWithUsController'
  });
});

app.controller('WorkingWithUsController', function ($scope, $rootScope) {
  $rootScope.title = 'Working With Us';
  $rootScope.name = 'working-with-us';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Working With Us';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// CCR Rule Compliance Data and Info
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/our-company/ccr-rule', {
    templateUrl: 'templates/about-us/our-company/ccr-rule.html',
    controller: 'CCRRuleController'
  });
});

app.controller('CCRRuleController', function ($scope, $rootScope) {
  $rootScope.title = 'CCR Rule Compliance Data and Information';
  $rootScope.name = 'ccr-rule';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'CCR Rule Compliance Data and Information';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});