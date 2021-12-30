app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/residential/savings-and-energy/rates-and-billing', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/index.html',
    controller: 'RatesBillingHomeController'
  });
});

app.controller('RatesBillingHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Rates and Billing';
  $rootScope.name = 'rates-and-billing-home';
  $rootScope.classes = 'landing-page rates-and-billing-section';
  $rootScope.metaTitle = 'Energy Rates and Paying Your Bill';
  $rootScope.metaDescription = 'Learn about pricing, payment and billing options.';
  $rootScope.metaKeywords = 'billing, payment, pay my bill, bill, power bill, power, energy bill, energy, refund, pay bill online';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rates-and-billing';
});

app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/residential/savings-and-energy/rates-and-billing-2', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/index-2.html',
    controller: 'RatesBillingHomeController2'
  });
});

app.controller('RatesBillingHomeController2', function ($scope, $rootScope) {
  $rootScope.title = 'Rates and Billing';
  $rootScope.name = 'rates-and-billing-home';
  $rootScope.classes = 'landing-page rates-and-billing-section';
  $rootScope.metaTitle = 'Energy Rates and Paying Your Bill';
  $rootScope.metaDescription = 'Learn about pricing, payment and billing options.';
  $rootScope.metaKeywords = 'billing, payment, pay my bill, bill, power bill, power, energy bill, energy, refund, pay bill online ';
});

app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rates-and-billing/rates-rules-and-regulations', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/rates-rules-and-regulations.html',
    controller: 'RatesRidersRulesController'
  });
});

app.controller('RatesRidersRulesController', function ($scope, $rootScope) {
  $rootScope.title = 'Rates, Rules, and Regulations';
  $rootScope.name = 'res-rates-rules-and-regulations';
  $rootScope.classes = 'rates-and-billing-section';
  $rootScope.metaTitle = 'Your Power Use Explained';
  $rootScope.metaDescription = 'Learn more about how we bill your Gulf Power use, how to understand your bill, and how to save energy every month.';
  $rootScope.metaKeywords = 'energy, consumption, demand, kilowatts, kWh, electricity, savings, appliances';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rates-and-billing/rates-rules-and-regulations';
});

app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rates-and-billing/rate-options', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/rate-options.html',
    controller: 'RateOptionsController'
  });
});

app.controller('RateOptionsController2', function ($scope, $rootScope) {
  $rootScope.title = 'Rate Options';
  $rootScope.name = 'rate-options';
  $rootScope.classes = 'rates-and-billing-section';
  $rootScope.metaTitle = 'Find Your Best Rate';
  $rootScope.metaDescription = 'Learn more about our new Rate Design plan and how it can help you lower your power bill based on demand and time of use.';
  $rootScope.metaKeywords = 'power bill, energy bill, energy efficiency, rate, electric rate, demand, time, meter, savings';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rates-and-billing';
});

app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rates-and-billing/rate-options-2', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/rate-options-2.html',
    controller: 'RateOptionsController2'
  });
});

app.controller('RateOptionsController', function ($scope, $rootScope) {
  $rootScope.title = 'Rate Options';
  $rootScope.name = 'rate-options';
  $rootScope.classes = 'rates-and-billing-section';
  $rootScope.metaTitle = 'Find Your Best Rate';
  $rootScope.metaDescription = 'Learn more about our new Rate Design plan and how it can help you lower your power bill based on demand and time of use.';
  $rootScope.metaKeywords = 'power bill, energy bill, energy efficiency, rate, electric rate, demand, time, meter, savings';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rates-and-billing';
});

app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rates-and-billing/understanding-your-bill', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/understanding-your-bill.html',
    controller: 'UnderstandingYourBillController'
  });
});

app.controller('UnderstandingYourBillController', function ($scope, $rootScope) {
  $rootScope.title = 'Understanding Your Bill';
  $rootScope.name = 'understanding-your-bill';
  $rootScope.classes = 'understanding-your-bill rates-and-billing-section';
  $rootScope.metaTitle = 'Your Power Use Explained';
  $rootScope.metaDescription = 'Learn more about how we bill your Gulf Power use, how to understand your bill, and how to save energy every month.';
  $rootScope.metaKeywords = 'energy, consumption, demand, kilowatts, kWh, electricity, savings, appliances';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rates-and-billing/understanding-your-bill';
});
