// Energy Select
app.config(function ($routeProvider) {
  // Landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/energy-select', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/energy-select/index.html',
    controller: 'EnergySelectController'
  });
});

app.controller('EnergySelectController', function ($scope, $rootScope) {
  $rootScope.title = 'Energy <span class="select">Select</span>';
  $rootScope.name = 'energy-select';
  $rootScope.classes = "landing-page";
  $rootScope.metaTitle = 'Energy Select';
  $rootScope.metaDescription = 'Put the power of savings in your hands. With our unique home energy management program, you can pay a lower electricity price 87% of the time.';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});

app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/energy-select/support-and-faqs', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/energy-select/support-and-faqs.html',
    controller: 'SupportFAQsController'
  });
});

app.controller('SupportFAQsController', function ($scope, $rootScope) {
  $rootScope.title = 'Support and FAQs';
  $rootScope.name = 'energy-select-support-and-faqs';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Energy Select Support and FAQs';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});

app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/energy-select/request-more-info', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/energy-select/request-more-info.html',
    controller: 'RequestMoreInfoController'
  });
});

app.controller('RequestMoreInfoController', function ($scope, $rootScope) {
  $rootScope.title = 'Request More Info';
  $rootScope.name = 'energy-select-request-more-info';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});

// Help page
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/energy-select/help', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/energy-select/help.html',
    controller: 'ESHelpController'
  });
});

app.controller('ESHelpController', function ($scope, $rootScope) {
  $rootScope.title = 'Energy <span class="select">Select</span> Help Center';
  $rootScope.name = 'energy-select-help-center';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Energy Select Help Center';
  $rootScope.metaDescription = 'Energy Select user manuals for DirectLink';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
	$rootScope.robots = 'noindex, nofollow';
});