// Contact Us
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/care-center/contact-us', {
    templateUrl: 'templates/business/savings-and-energy/care-center/contact-us.html',
    controller: 'BusinessCareCenterContactUsController'
  });
});

app.controller('BusinessCareCenterContactUsController', function ($scope, $rootScope, $http, $anchorScroll) {
  $rootScope.title = 'Contact Us';
  $rootScope.name = 'business-care-center-contact-us';
  $rootScope.classes = 'business-care-center-contact-us';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';
  // 'Contact' Form
  $scope.submitForm = function (isValid) {
		if (isValid) {
			$http({
				method: 'POST',
				url: 'https://xeform.southernco.com/api/Mail/BusinessContactForm',
				contentType : 'application/json',
				data: { 'subject': 'CONTACT FORM: information request [ Business ]', 'body': [ "name: " + $scope.users_name + "\r\n\n company: " + $scope.company + "\r\n\n email: " + $scope.email_address + "\r\n\n phone: " + $scope.phone_number + "\r\n\n message: " + $scope.message + "\r\n\n\n submitted via: " + $rootScope.currentURL + ""] },
				headers : {'Content-Type':'application/json'}
			})
			.success(function() {
				console.log('success');
				$scope.hideAfterValidSubmit = true;
				$anchorScroll('contact-form');
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
    console.log('Name:', $scope.users_name);
		console.log('Company:', $scope.company);
		console.log('Phone:', $scope.phone_number);
    console.log('Email:', $scope.email_address);
		console.log('Message:', $scope.message);
    console.log('');
		*/
  };
});