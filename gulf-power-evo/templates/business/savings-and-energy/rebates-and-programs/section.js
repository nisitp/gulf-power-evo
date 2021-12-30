// Rebates and Programs
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/index.html',
    controller: 'BusinessRebatesAndProgramsHomeController'
  });
});

app.controller('BusinessRebatesAndProgramsHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Rebates and Programs';
  $rootScope.name = 'business-rebates-and-programs';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs';
});

// Energy Checkup
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/energy-checkup', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/energy-checkup.html',
    controller: 'BusinessEnergyCheckupController'
  });
});

app.controller('BusinessEnergyCheckupController', function ($scope, $rootScope) {
  $rootScope.title = 'Energy Checkup';
  $rootScope.name = 'energy-checkup';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Energy Checkup';
  $rootScope.metaDescription = 'Free tools to analyze your energy use and provide recommendations to save energy and money.';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/energy-checkup';
});

// Electric Vehicles
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/electric-vehicles', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/electric-vehicles.html',
    controller: 'BusinessElectricVehiclesController'
  });
});

app.controller('BusinessElectricVehiclesController', function ($scope, $rootScope) {
  $rootScope.title = 'Electric Vehicles';
  $rootScope.name = 'business-electric-vehicles';
  $rootScope.classes = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/electric-vehicles';
});

// Heating and Cooling
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/heating-and-cooling', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/heating-and-cooling.html',
    controller: 'BusinessHeatingCoolingController'
  });[]
});

app.controller('BusinessHeatingCoolingController', function ($scope, $rootScope) {
  $rootScope.title = 'Heating and Cooling';
  $rootScope.name = 'business-heating-and-cooling';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Heating and Cooling';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = 'insulation, incentives, rebates, business, energy bill, power bill, energy savings, HVAC, air conditioning';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/heating-and-cooling';
});

// Insulation
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/insulation', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/insulation.html',
    controller: 'BusInsulationController'
  });
});

app.controller('BusInsulationController', function ($scope, $rootScope) {
  $rootScope.title = 'Insulation';
  $rootScope.name = 'insulation';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Insulation';
  $rootScope.metaDescription = 'Learn how you can cut your overhead and earn incentives by properly insulating your business.';
  $rootScope.metaKeywords = 'insulation, incentives, rebates, business, energy bill, power bill, energy savings, HVAC, air conditioning';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/insulation-envelope-and-ducts';
});

// Roofing
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/roofing', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/roofing.html',
    controller: 'BusRoofingController'
  });
});

app.controller('BusRoofingController', function ($scope, $rootScope) {
  $rootScope.title = 'Roofing';
  $rootScope.name = 'business-roofing';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Roofing';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = 'roofing, roof, sun, solar, A/C, HVAC, cost, savings, incentives';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/roofing';
});

// Solar Energy
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/solar-energy', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/solar-energy.html',
    controller: 'BusinessSolarEnergyController'
  });
});

app.controller('BusinessSolarEnergyController', function ($scope, $rootScope) {
  $rootScope.title = 'Solar Energy';
  $rootScope.name = 'business-solar-energy';
  $rootScope.classes = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/solar';
});
