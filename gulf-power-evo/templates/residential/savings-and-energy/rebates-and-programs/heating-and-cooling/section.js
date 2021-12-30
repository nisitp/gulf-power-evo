// Heating and Cooling
app.config(function ($routeProvider) {
  // water heaters
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/heating-and-cooling', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/heating-and-cooling/index.html',
    controller: 'HeatingAndCoolingController'
  });
});

app.controller('HeatingAndCoolingController', function ($scope, $rootScope) {
  $rootScope.title = 'Heating and Cooling';
  $rootScope.name = 'heating-and-cooling';
  $rootScope.classes = 'heating-and-cooling';
  $rootScope.metaTitle = 'Heating and Cooling';
  $rootScope.metaDescription = 'Install or upgrade to an energy efficient HVAC system and earn rebates.';
  $rootScope.metaKeywords = 'energy efficient, hvac, heating, air, cost savings, rebate';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/heating-and-cooling';
});

// Geothermal Heat Pumps
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/heating-and-cooling/geothermal-heat-pump', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/heating-and-cooling/geothermal-heat-pump.html',
    controller: 'GeothermalHeatPumpsController',
  });
});

app.controller('GeothermalHeatPumpsController', function ($scope, $rootScope) {
  $rootScope.title = 'Geothermal Heat Pumps';
  $rootScope.name = 'heat-pumps-home';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Geothermal Heat Pumps';
  $rootScope.metaDescription = 'Learn about types of energy efficient heat pumps and their many uses and energy savings benefits.';
  $rootScope.metaKeywords = 'heat pump, heat, hot water, HVAC, air conditioning, geothermal, air source, energy savings, cost savings, dual fuel';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/heating-and-cooling';
});
