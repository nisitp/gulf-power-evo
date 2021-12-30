// Rates and Billing
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/rates-and-billing', {
    templateUrl: 'templates/business/savings-and-energy/rates-and-billing/index.html',
    controller: 'BusRatesAndBillingCondasdsadsatroller'
  });
});

app.controller('BusRatesAndBillingCondasdsadsatroller', function ($scope, $rootScope) {
  $rootScope.title = 'Energy Rates and Paying Your Bill';
  $rootScope.name = 'business-rates-and-billing';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Energy Rates and Paying Your Bill';
  $rootScope.metaDescription = 'Learn about pricing, payment and billing options.';
  $rootScope.metaKeywords = 'billing, payment, pay my bill, bill, power bill, power, energy bill, energy, refund, pay bill online';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rates-and-billing';
});

// Rates and Billing
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/rates-and-billing/rates-rules-and-regulations', {
    templateUrl: 'templates/business/savings-and-energy/rates-and-billing/rates-rules-and-regulations.html',
    controller: 'BusRatesRidersRulesController'
  });
});

app.controller('BusRatesRidersRulesController', function ($scope, $rootScope) {
  $rootScope.title = 'Rates, Rules, and Regulations';
  $rootScope.name = 'bus-rates-rules-and-regulations';
  $rootScope.classes = 'business-rates-and-billing-section';
  $rootScope.metaTitle = 'Your Power Use Explained';
  $rootScope.metaDescription = 'Learn more about how we bill your Gulf Power use, how to understand your bill, and how to save energy every month.';
  $rootScope.metaKeywords = 'energy, consumption, demand, kilowatts, kWh, electricity, savings, appliances';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rates-and-billing/rates-rules-and-regulations';
});


// Understanding Your Bill
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rates-and-billing/understanding-your-bill', {
    templateUrl: 'templates/residential/savings-and-energy/rates-and-billing/understanding-your-bill.html',
    controller: 'BusinessUnderstandingYourBillController'
  });
});

app.controller('BusinessUnderstandingYourBillController', function ($scope, $rootScope) {
  $rootScope.title = 'Understanding Your Bill';
  $rootScope.name = 'business-understanding-your-bill';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Your Power Use Explained';
  $rootScope.metaDescription = 'Learn more about how we bill your Gulf Power use, how to understand your bill, and how to save energy every month.';
  $rootScope.metaKeywords = 'energy, consumption, demand, kilowatts, kWh, electricity, savings, appliances';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rates-and-billing/understanding-your-bill';
});
