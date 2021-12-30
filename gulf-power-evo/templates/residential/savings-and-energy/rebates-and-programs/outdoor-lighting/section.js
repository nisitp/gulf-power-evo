// Outdoor Lighting
app.config(function ($routeProvider) {
  // Landing page
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/outdoor-lighting', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/outdoor-lighting/index.html',
    controller: 'OutdoorLightingHomeController',
  });
});

app.controller('OutdoorLightingHomeController', function ($scope, $rootScope, $http, $anchorScroll) {
  $rootScope.title = 'Outdoor Lighting';
  $rootScope.name = 'outdoor-lighting-home';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Outdoor Lighting';
  $rootScope.metaDescription = 'Increase the beauty and safety of your home with outdoor lighting options from Gulf Power.';
  $rootScope.metaKeywords = 'outdoor lighting, safety, LED, sustainability, energy efficient, Design-a-Light, home, house';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/outdoor-lighting';
  // 'Contact Us' Form
  $scope.submitForm = function (isValid) {
    if (isValid) {
      // The form is valid. (ノ^o^)ノ
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/OutdoorLighting',
				contentType : 'application/json',
				data: { 'subject': 'New lead; send consultant [ Outdoor Lighting ]', 'body': [ 
					"name: " + $scope.contactName + 
					"\r\n\n email: " + $scope.email + 
					"\r\n\n light type: " + $scope.custtype + 
					"\r\n\n inquiry type: " + $scope.bttcy + 
					"\r\n\n company: " + $scope.company + 
					"\r\n\n phone: " + $scope.phone + 
					"\r\n\n address:\r\n" + $scope.address1 + 
					"\r\n" + $scope.address2 + 
					"\r\n" + $scope.city + ", " + $scope.state + " " + $scope.zip + 
					"\r\n\n account #: " + $scope.gulfaccount + 
					"\r\n\n message:\r\n" + $scope.notes + 
					"\r\n\n\n submitted via: " + $rootScope.currentURL + 
					""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
				$anchorScroll('contact-form');
        $scope.thanksMessage = '<h3><strong>Thank you for your inquiry!</strong></h3><p>A representative will contact you soon.</p><p>Please call <a href="tel::18002255797">1-800-225-5797</a> if you have questions.</p>';
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
    console.log('Name:', $scope.contactName);
    console.log('Email Address:', $scope.email);
		console.log('Type of Light:', $scope.custtype); 
		console.log('Type of Inquiry:', $scope.bttcy); 
		console.log('Company:', $scope.company);
		console.log('Phone:', $scope.phone);
		console.log('Address:', $scope.address1, $scope.address2, $scope.city, $scope.state, $scope.zip);
		console.log('Account #:', $scope.gulfaccount);
		console.log('Message:', $scope.notes);		
    console.log('');
		*/
  };
});


// Design a light
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/outdoor-lighting/design-a-light', {
    templateUrl: 'templates/shared/design-a-light.html',
    controller: 'DesignALightResController',
  });
});

app.controller('DesignALightResController', function ($scope, $rootScope, $http, $anchorScroll) {
  $rootScope.title = 'Design A Light';
  $rootScope.name = 'design-a-light';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/outdoor-lighting/design-a-light';
	// 'Design-a-light Form
  $scope.submitForm = function (isValid) {
    if (isValid) {
			// get value of favorited items from input into scope
			$scope.products = $('input#products-inquiring-about').val();
			
      // If the form is valid. (ノ^o^)ノ			
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/DesignALight',
				contentType : 'application/json',
				data: { 'subject': 'Design A Light (residential)', 'body': [ 
					"Name: " + $scope.customerName + 
					"\r\n\n Email: " + $scope.email + 
					"\r\n\n Phone: " + $scope.phone + 
					"\r\n\n Address:\r\n" + $scope.address + 
					"\r\n" + $scope.cityStateZip + 
					"\r\n\n Message:\r\n" + $scope.comments + 
					"\r\n\n " + $scope.products + 
					"\r\n\n\n Submitted via: " + $rootScope.currentURL + 
					""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
				$anchorScroll('contact-form');
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
    console.log('Name:', $scope.customerName);
    console.log('Email Address:', $scope.email);
		console.log('Phone:', $scope.phone);
		console.log('Address:', $scope.address, $scope.cityStateZip);
		console.log('Message:', $scope.comments);
		console.log('favs', $scope.products);
		console.log('currentURL', $rootScope.currentURL);
    console.log('');
		*/
  };
});


// Report an Outage
app.config(function ($routeProvider) {
  $routeProvider.when('/residential/savings-and-energy/rebates-and-programs/outdoor-lighting/report-an-outage', {
    templateUrl: 'templates/residential/savings-and-energy/rebates-and-programs/outdoor-lighting/report-an-outage.html',
    controller: 'ReportAnOutageController',
  });
});

app.controller('ReportAnOutageController', function ($scope, $rootScope) {
  $rootScope.title = 'Report a Streetlight Outage';
  $rootScope.name = 'report-an-outage';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/business/savings-and-energy/rebates-and-programs/outdoor-lighting/report-an-outage';
});
