app.config(function ($routeProvider) {
  // Landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/electric-vehicles', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/electric-vehicles/index.html',
    controller: 'ElectricVehiclesLandingPageController',
  });
});

app.controller('ElectricVehiclesLandingPageController', function ($scope, $rootScope, $http) {
  $rootScope.title = 'Electric Vehicles';
  $rootScope.name = 'electric-vehicles-home';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Electric Vehicles';
  $rootScope.metaDescription = 'Learn about benefits of electric vehicles and how to apply for our charging program.';
  $rootScope.metaKeywords = 'electric, electric cars, electric vehicles, electric autos, sustainable, energy saving, cost saving';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/electric-vehicles';
  // 'Contact' Form
  $scope.submitForm = function (isValid) {		
		if (isValid) {
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/ElectricVehicleDealer',
				contentType : 'application/json',
				data: { 'subject': 'EV form test', 'body': [ "name: " + $scope.yourname + "\r\n\n email: " + $scope.email_address + "\r\n\n message: " + $scope.message + "\r\n\n\n submitted via: " + $rootScope.currentURL + ""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
        $scope.thanksMessage = 'Thank you! A representative will contact you soon.';
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
    console.log('Name:', $scope.yourname);
    console.log('Email Address:', $scope.email_address);
		console.log('Message:', $scope.message);
    console.log('');
		*/
  };
});