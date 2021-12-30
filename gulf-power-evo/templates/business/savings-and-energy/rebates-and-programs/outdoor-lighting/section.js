// Outdoor Lighting
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/outdoor-lighting', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/outdoor-lighting/index.html',
    controller: 'BusOutdoorLightingHomeController'
  });
});

app.controller('BusOutdoorLightingHomeController', function ($scope, $rootScope, $document, $http, $anchorScroll) {
  $rootScope.title = 'Outdoor Lighting';
  $rootScope.name = 'outdoor-lighting';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = 'Outdoor Lighting';
  $rootScope.metaDescription = 'Increase the beauty and safety of your home with outdoor lighting options from Gulf Power.';
  $rootScope.metaKeywords = 'outdoor lighting, safety, LED, sustainability, energy efficient, Design-a-Light, home, house';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/outdoor-lighting';

  $document.ready(function () {
    var slideshow = $('.slideshow')
    .on('init', function () {
      $('.slideshow').show();
      $('.slideshow .slick-slide > div').matchHeight();

      // Make the image spill despite
      // it's 'overflow: auto'
      setTimeout(function () {
        $('.slideshow .slick-slide > div').css('overflow', 'visible');
      }, 1);

      // Push the pagination links down
      // then let the image spill again
      window.addEventListener('resize', function () {
        $('.slideshow .slick-slide > div').css('overflow', 'auto');

        setTimeout(function () {
          $('.slideshow .slick-slide > div').css('overflow', 'visible');
        }, 150);
      });
    })
    .slick({
      prevArrow: $('.slideshow + .slide-navigation-buttons .last-slide-button'),
      nextArrow: $('.slideshow + .slide-navigation-buttons .next-slide-button')
    });
  });
	
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
					"\r\n\n email: " + $scope.emailAddress + 
					"\r\n\n light type: " + $scope.customerType + 
					"\r\n\n inquiry type: " + $scope.enquiryType + 
					"\r\n\n company: " + $scope.companyName + 
					"\r\n\n phone: " + $scope.phoneNumber + 
					"\r\n\n address:\r\n" + $scope.addressLine1 + 
					"\r\n" + $scope.addressLine2 + 
					"\r\n" + $scope.city + ", " + $scope.state + " " + $scope.zip + 
					"\r\n\n account #: " + $scope.accountNumber + 
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
    console.log('Email Address:', $scope.emailAddress);
		console.log('Type of Light:', $scope.customerType); 
		console.log('Type of Inquiry:', $scope.enquiryType); 
		console.log('Company:', $scope.companyName);
		console.log('Phone:', $scope.phoneNumber);
		console.log('Address:', $scope.addressLine1, $scope.addressLine2, $scope.city, $scope.state, $scope.zip);
		console.log('Account #:', $scope.accountNumber);
		console.log('Message:', $scope.notes);		
    console.log('');
		*/
  };
});


// Design-a-light
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/outdoor-lighting/design-a-light', {
    templateUrl: 'templates/shared/design-a-light.html',
    controller: 'BusDesignALightController'
  });
});

app.controller('BusDesignALightController', function ($scope, $rootScope, $http, $anchorScroll) {
  $rootScope.title = 'Design A Light';
  $rootScope.name = 'design-a-light';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/outdoor-lighting/design-a-light';
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
				data: { 'subject': 'Design A Light (business)', 'body': [ 
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



// Report an outage
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/rebates-and-programs/outdoor-lighting/report-an-outage', {
    templateUrl: 'templates/business/savings-and-energy/rebates-and-programs/outdoor-lighting/report-an-outage.html',
    controller: 'BusReportAnOutageController'
  });
});

app.controller('BusReportAnOutageController', function ($scope, $rootScope) {
  $rootScope.title = 'Report a Streetlight Outage';
  $rootScope.name = 'report-an-outage';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy/rebates-and-programs/outdoor-lighting/report-an-outage';
});
