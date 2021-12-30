// Rebates and Programs
app.config(function ($routeProvider) {
  // Landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/index.html',
    controller: 'ResidentialRebatesAndProgramsLandingPageController',
  });
});

app.controller('ResidentialRebatesAndProgramsLandingPageController', function ($scope, $rootScope) {
  $rootScope.title = 'Residential Rebates & Programs';
  $rootScope.name = 'rebates-and-programs-home';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Rebates and Programs';
  $rootScope.metaDescription = 'Learn about current opportunities and incentives to make your home more energy efficient and lower your power bill.';
  $rootScope.metaKeywords = 'rebates, incentives, energy efficiency, savings, power bill, energy usage, energy select';
//   $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});


// Energy Checkup
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/energy-checkup', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/energy-checkup.html',
    controller: 'EnergyCheckupPageController',
  });
});

app.controller('EnergyCheckupPageController', function ($scope, $rootScope, $http) {
  $rootScope.title = 'Energy Checkup';
  $rootScope.name = 'energycheckup';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Energy Checkup';
  $rootScope.metaDescription = "Get a free analysis of your home's energy use and recommendations to save energy and money";
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/energy-checkup';
  // 'Contact Us' Form
  $scope.submitForm = function (isValid) {
    if (isValid) {
      // The form is valid. (ノ^o^)ノ
			// send the form data to be emailed // make sure to change the '/api/Mail/ID' and body
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/energycheckup',
				contentType : 'application/json',
				data: { 'subject': 'Energy Checkup', 'body': [ "name: " + $scope.first_name + "\r\n\n phone: " + $scope.phone_number + "\r\n\n email: " + $scope.email_address + "\r\n\n\n submitted via: " + $rootScope.currentURL + ""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
        $scope.thanksMessage = '<h3><strong>Thank you!</strong></h3><p>An Energy Expert will be in touch to schedule your free Energy Checkup.</p><p>Please call <a href="tel::18776554001">1-877-655-4001</a> if you have questions.</p>';
			})
			.error(function() {
				console.log('error');
      });
		  console.log('%cThe form is valid. (ノ^o^)ノ', 'color: #00cc33');

     } else {
      console.log('%cYou submitted the form but it\'s not valid. (∩︵∩)', 'color: #fe0e30');
    }
		/*
    console.log('Here\'s what you submitted:');
    console.log('Name:', $scope.first_name);
    console.log('Phone Number:', $scope.phone_number);
    console.log('Email Address:', $scope.email_address);
    console.log('');
		*/
  };
});


// Find a CheckMe! Contractor
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/find-a-CheckMe-contractor', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/find-a-CheckMe-contractor.html',
    controller: 'FindCheckMeContractorPageController',
  });

  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/find-a-CheckMe-contractor', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/find-a-CheckMe-contractor.html',
    controller: 'FindCheckMeContractorPageController',
  });
});

app.controller('FindCheckMeContractorPageController', function ($scope, $rootScope) {
  $rootScope.title = 'Find a CheckMe! Contractor';
  $rootScope.name = 'find-a-CheckMe-contractor';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});


// Insulation, Envelope, and Ducts
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/insulation-envelope-and-ducts', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/insulation-and-envelope.html',
    controller: 'InsulationAndDuctsController',
  });
});

app.controller('InsulationAndDuctsController', function ($scope, $rootScope) {
  $rootScope.title = 'Insulation, Envelope, and Ducts';
  $rootScope.name = 'insulation-envelope-and-ducts';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Insulation, Envelope, and Ducts';
  $rootScope.metaDescription = 'Learn about the energy savings benefits of sealing your home\'s envelope, and properly installing insulation and a duct system.';
  $rootScope.metaKeywords = 'duct systems, hvac, energy savings, cost savings, rebates, home, power, insulation, envelope, leaks, air';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/insulation';
});


// Water Heaters
app.config(function ($routeProvider) {
  // water heaters
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/water-heaters', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/water-heaters.html',
    controller: 'WaterHeatersController'
  });
});

app.controller('WaterHeatersController', function ($scope, $rootScope, $http) {
  $rootScope.title = 'Water Heaters';
  $rootScope.name = 'water-heaters';
  $rootScope.classes = 'water-heaters';
  $rootScope.metaTitle = 'Water Heaters';
  $rootScope.metaDescription = 'Electric water heaters use much less energy than gas water heaters. Switch and you can receive a free new water heater.';
  $rootScope.metaKeywords = 'water heater, gas, electric, savings, water, laundry, shower, bath, dishwasher, energy, energy savings, geothermal, heat pump';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
  // 'Contact' Form
  $scope.submitForm = function (isValid) {		
		if (isValid) {
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/WaterHeaterMoreInfo',
				contentType : 'application/json',
				data: { 'subject': 'Water Heater Conversion: Gulf Power', 'body': [ "name: " + $scope.customer_name + "\r\n\n email: " + $scope.email_address + "\r\n\n phone: " + $scope.phone_number + "\r\n\n\n submitted via: " + $rootScope.currentURL + ""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
        $scope.thanksMessage = '<h3><strong>Thank you!</strong></h3><p>A representative will contact you soon.</p>';
			})
			.error(function() {
				console.log('error');
      });
		  console.log('%cThe form is valid. (ノ^o^)ノ', 'color: #00cc33');
     } else {
      console.log('%cYou submitted the form but it\'s not valid. (∩︵∩)', 'color: #fe0e30');
    }
		/*
    console.log('Here\'s what you submitted:');
    console.log('Name:', $scope.customer_name);
    console.log('Phone Number:', $scope.phone_number);
    console.log('Email Address:', $scope.email_address);
    console.log('');
		*/
  };
});


// Pool Pumps
app.config(function ($routeProvider) {
  // water heaters
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/pool-pumps', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/pool-pumps.html',
    controller: 'PoolPumpsController'
  });
});
app.controller('PoolPumpsController', function ($scope, $rootScope) {
  $rootScope.title = 'Pool Pumps & Heating';
  $rootScope.name = 'pool-pumps';
  $rootScope.classes = 'pool-pumps';
  $rootScope.metaTitle = 'Pool Pumps and Heating';
  $rootScope.metaDescription = 'Learn more about energy-efficient filtration and heating pumps in pools, and if you qualify for a rebate.';
  $rootScope.metaKeywords = 'pool, pool filter, pool pump, renewable energy, energy efficient, energy savings, cost savings, energy select';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});


// Roofing
app.config(function ($routeProvider) {
  // water heaters
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/roofing', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/roofing.html',
    controller: 'RoofingController'
  });
});

app.controller('RoofingController', function ($scope, $rootScope) {
  $rootScope.title = 'Roofing';
  $rootScope.name = 'roofing';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Roofing';
  $rootScope.metaDescription = 'Learn about benefits of installing or upgrading to energy-efficient roofing materials, and how to apply for rebates.';
  $rootScope.metaKeywords = 'roofing, energy efficiency, weather, elements, climate, new roof, roofing materials';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/roofing';
});


// Solar
app.config(function ($routeProvider) {
  // water heaters
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/solar', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/solar.html',
    controller: 'SolarController'
  });
});

app.controller('SolarController', function ($scope, $rootScope) {
  $rootScope.title = 'Solar Energy';
  $rootScope.name = 'solar';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Solar Energy';
  $rootScope.metaDescription = 'Find out why solar is a great complement to your electric service and learn more about solar solutions.';
  $rootScope.metaKeywords = 'solar, sustainable, sustainability, solar energy, energy, alternative energy, cost saving, energy efficient';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/solar-energy';
});


// Solar Energy Share
app.config(function ($routeProvider) {
  // water heaters
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/solar/energy-share', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/solar-energy-share.html',
    controller: 'SolarEnergyShareController'
  });
});

app.controller('SolarEnergyShareController', function ($scope, $rootScope, $http, $anchorScroll) {
  $rootScope.title = 'Solar Energy Share';
  $rootScope.name = 'solar-energy-share';
  $rootScope.classes = 'solar-energy-share';
  $rootScope.metaTitle = 'Gulf Solar Energy Share';
  $rootScope.metaDescription = 'Support solar development in Northwest Florida by subscribing to our community solar program.';
  $rootScope.metaKeywords = 'solar, sustainable, sustainability, solar energy, energy, alternative energy, cost saving, energy efficient, community solar, solar share';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/solar-energy';
  // 'Contact Us' Form
  $scope.submitForm = function (isValid) {
    if (isValid) {
      // The form is valid. (ノ^o^)ノ
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/GulfSolarEnergyShare',
				contentType : 'application/json',
				data: { 'subject': 'Gulf Solar Energy Share: subscription sign up [form submission]', 'body': [ "account #:" + $scope.account_number + "\r\n\n name: " + $scope.customer_name + "\r\n\n address:\r\n" + $scope.address_line_1 + "\r\n" + $scope.address_line_2 + "\r\n" + $scope.city + ", " + $scope.state + " " + $scope.zip + "\r\n\n email: " + $scope.email + "\r\n\n phone: " + $scope.phone + "\r\n\n subscription term: " + $scope.subscription_term + "\r\n # of subscriptions: " + $scope.subscription_number + "\r\n renew annually: " + $scope.renew_annually + "\r\n\n\n accept terms: " + $scope.accept_terms + "\r\n\n\n submitted via: " + $rootScope.currentURL + ""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
				$anchorScroll('form-holder');
        $scope.thanksMessage = '<h3>Thank you for being a pioneer member of Gulf Solar Energy Share!</h3><p><strong>Your subscription has been reserved.</strong> The subscription fee and bill credit will appear on your monthly Gulf Power bill when the program is completed.</p><p>You will receive updates by email<sup class="red">*</sup> to keep you informed on the progress of this exciting solar energy program.</p><br /><p><small><span class="red">*</span> You can stop receiving program updates to your email at any time by unsubscribing or calling us at 1-877-655-4001.</small></p>';
			})
			.error(function() {
				console.log('error');
      });
		  console.log('%cThe form is valid. (ノ^o^)ノ', 'color: #00cc33');

     } else {
      console.log('%cYou submitted the form but it\'s not valid. (∩︵∩)', 'color: #fe0e30');
    }
		/*
    console.log('Here\'s what you submitted:');
		console.log('account:', $scope.account_number);
		console.log('name:', $scope.customer_name);
		console.log('address:', $scope.address_line_1 + " / " + $scope.address_line_2 + " / " + $scope.city + ", " + $scope.state + " " + $scope.zip);
		console.log('email:', $scope.email);
		console.log('phone:', $scope.phone);
		console.log('subscription term:', $scope.subscription_term);
		console.log('# of subscriptions:', $scope.subscription_number);
		console.log('renew annually:', $scope.renew_annually);
		console.log('accept terms:', $scope.accept_terms);		
		console.log('');
		*/
  };
});


// Windows
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/windows', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/windows.html',
    controller: 'WindowsController'
  });
});

app.controller('WindowsController', function ($scope, $rootScope) {
  $rootScope.title = 'Windows';
  $rootScope.name = 'windows';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Windows';
  $rootScope.metaDescription = 'Understand and take advantage of the benefits of installing or upgrading to energy-efficient windows in your home.';
  $rootScope.metaKeywords = 'windows, heat, air, sustainable, energy efficient, cost saving, energy saving, rebate, types of windows';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs';
});
