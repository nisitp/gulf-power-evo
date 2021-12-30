var app = angular.module('gulfPower', ['ngRoute', 'ngSanitize']);

// for stripping tags placed in the page titles
app.filter('gulfPower.filters', [])
.filter('htmlToPlaintext', function() {
  return function(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
});

app.run(function($rootScope, $location) {
  $rootScope.$on("$viewContentLoaded", function(e, next, current) {
    // Remember some things for later
    $rootScope.currentURL = $location.absUrl();
    $rootScope.currentPath = $location.path();
    $rootScope.currentDirectory = $rootScope.currentPath.substring(0, $location.path().lastIndexOf('/'));
    $rootScope.currentOrigin = window.location.origin + '/';

    // Remember which first level section we're in
    $rootScope.currentNavigationIdentifier;
    if ($location.path().indexOf('residential') != -1) {
      $rootScope.currentNavigationIdentifier = 'residential';
    } else if ($location.path().indexOf('business') != -1) {
        $rootScope.currentNavigationIdentifier = 'business';
    } else if ($location.path().indexOf('about-us') != -1) {
      $rootScope.currentNavigationIdentifier = 'about-us';
    }

    // Remember which second level section we're in
    $rootScope.sectionTitle;
    if ($location.path().indexOf('residential') != -1) {
      $rootScope.sectionTitle = 'residential';
    } else if ($location.path().indexOf('business') != -1) {
      $rootScope.sectionTitle = 'business';
    } else if ($location.path().indexOf('about-us') != -1) {
      $rootScope.sectionTitle = 'about-us';
    } else if ($location.path() == '/') {
      $rootScope.sectionTitle = 'home';
    }

    // Go to the top unless it's supposed to jump
    if (window.location.href.indexOf('#') == -1) {
      window.scrollTo(0,0);
    }

    // Close the mobile menu if it's open
    $rootScope.dismissMobileMenu();

    // Call 'equalHeight()' if it's there
    if (typeof equalHeight == 'function') {
      equalHeight();
    }

    // Grab that one script again so it'll execute again
    $.getScript('/js/initPage.js');

    // Default to the 'residential' section
    if (['residential', 'business'].indexOf($rootScope.sectionTitle) == -1) {
      $rootScope.defaultSectionDirectory = 'residential';
    }

    // List of the root navigation links
    $rootScope.navigationLinks = [{
      'title': 'Savings & Energy',
      'identifier': 'savings-and-energy',
      'classes': 'savings-and-energy-link',
      'path': '/' + $rootScope.defaultSectionDirectory + '/savings-and-energy'
    }, {
      'title': 'Outages',
      'path': '/outages',
      'identifier': 'outages'
    }, {
      'title': 'About Us',
      'identifier': 'about-us',
      'path': '/about-us'
    }, {
      'title': 'My Profile',
      'path': 'https://customerservice2.southerncompany.com/Login?mnuOpco=gulf',
      'identifier': 'my-profile'
    }];

    $rootScope.mobileNavigationLinks = [{
      'title': 'Residential Customers',
      'identifier': 'residential',
      'path': '/residential/savings-and-energy'
    }, {
      'title': 'Business Customers',
      'identifier': 'business',
      'path': '/business/savings-and-energy'
    }, {
      'title': 'Outages',
      'identifier': 'outages',
      'path': '/outages',
      'hasSubnavigationList': false
    }, {
      'title': 'About Us',
      'identifier': 'about-us',
      'path': '/about-us'
    }, {
      'title': 'My Profile',
      'identifier': 'my-profile',
      'path': 'https://customerservice2.southerncompany.com/Login?mnuOpco=gulf'
    }];

    // Update the tiny subnavigation links
    $rootScope.tinySubnavigationLinks = $rootScope.subnavigationLinks[$rootScope.currentNavigationIdentifier];
  });

  // Determine whether subnavigation
  // links exist for a given identifier
  $rootScope.subnavigationLinksExist = function (identifier) {
    if ($rootScope.subnavigationLinks[identifier] == undefined) {
      return false;
    } else {
      return true;
    }
  }

  // Return mobile menu subnavigation links
  $rootScope.subnavigationLinks = {
    // First level
    'residential': [{
      'title': 'Rebates and Programs',
      'path': '/residential/savings-and-energy/rebates-and-programs',
      'identifier': 'residential-rebates-and-programs'
    }, {
      'title': 'Savings Tips and Tools',
      'path': '/residential/savings-and-energy/savings-tips-and-tools',
      'identifier': 'savings-tips-and-tools',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'Rates and Billing',
      'path': '/residential/savings-and-energy/rates-and-billing',
      'identifier': 'residential-rates-and-billing'
    }],
    'business': [{
      'title': 'Grow Your Business',
      'path': '/business/savings-and-energy/grow-your-business',
      'identifier': 'grow-your-business'
    }, {
      'title': 'Rebates and Programs',
      'path': '/business/savings-and-energy/rebates-and-programs',
      'identifier': 'business-rebates-and-programs'
    }, {
      'title': 'Savings Tips and Tools',
      'path': '/business/savings-and-energy/savings-tips-and-tools',
      'identifier': 'savings-tips-and-tools',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'Rates and Billing',
      'path': '/business/savings-and-energy/rates-and-billing',
      'identifier': 'business-rates-and-billing'
    }],
    'about-us': [{
      'title': 'In The Community',
      'path': '/about-us/in-the-community',
      'identifier': 'in-the-community',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'Our Company',
      'path': '/about-us/our-company',
      'identifier': 'our-company',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'Education and Workforce Development',
      'path': '/about-us/education-and-workforce-development',
      'identifier': 'education-and-workforce-development',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'Safety',
      'path': '/about-us/safety',
      'identifier': 'safety',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'NewsCenter',
      'path': 'http://www.gulfpowernews.com/',
      'identifier': 'newscenter',
      'shouldPushSubnavigationList': false
    }, {
      'title': 'Careers',
      'path': '/about-us/careers',
      'identifier': 'careers',
      'shouldPushSubnavigationList': false
    }],
    // Second level
    /** Residential **/
    'residential-rebates-and-programs': [{
      'title': 'Appliances',
      'path': '/residential/savings-and-energy/rebates-and-programs/appliances',
      'identifier': 'appliances'
    }, {
      'title': 'EarthCents Home',
      'path': '/residential/savings-and-energy/rebates-and-programs/earthcents',
      'identifier': 'earthcents'
    }, {
      'title': 'Electric Vehicles',
      'path': '/residential/savings-and-energy/rebates-and-programs/electric-vehicles',
      'identifier': 'electric-vehicles'
    }, {
      'title': 'Energy Checkup',
      'path': '/residential/savings-and-energy/rebates-and-programs/energy-checkup',
      'identifier': 'energy-checkup'
    }, {
      'title': 'Energy <em>Select</em>',
      'path': '/residential/savings-and-energy/rebates-and-programs/energy-select',
      'identifier': 'energy-select'
    }, {
      'title': 'Find a CheckMe! Contractor',
      'path': '/residential/savings-and-energy/rebates-and-programs/find-a-CheckMe-contractor',
      'identifier': 'find-a-CheckMe-contractor'
    }, {
      'title': 'Heating and Cooling',
      'path': '/residential/savings-and-energy/rebates-and-programs/heating-and-cooling',
      'identifier': 'heating-and-cooling'
    }, {
      'title': 'Insulation, Envelope, and Ducts',
      'path': '/residential/savings-and-energy/rebates-and-programs/insulation-envelope-and-ducts',
      'identifier': 'insulation-envelope-and-ducts'
    }, {
      'title': 'Outdoor Lighting',
      'path': '/residential/savings-and-energy/rebates-and-programs/outdoor-lighting',
      'identifier': 'outdoor-lighting'
    }, {
      'title': 'Pool Pumps and Heating',
      'path': '/residential/savings-and-energy/rebates-and-programs/pool-pumps',
      'identifier': 'pool-pumps'
    }, {
      'title': 'Roofing',
      'path': '/residential/savings-and-energy/rebates-and-programs/roofing',
      'identifier': 'roofing'
    }, {
      'title': 'Smart Energy',
      'path': '/residential/savings-and-energy/rebates-and-programs/smart-energy',
      'identifier': 'smart-energy'
    }, {
      'title': 'Solar',
      'path': '/residential/savings-and-energy/rebates-and-programs/solar',
      'identifier': 'solar'
    }, {
      'title': 'Surge Protection',
      'path': '/residential/savings-and-energy/rebates-and-programs/surge-protection',
      'identifier': 'surge-protection'
    }, {
      'title': 'Water Heaters',
      'path': '/residential/savings-and-energy/rebates-and-programs/water-heaters',
      'identifier': 'water-heaters'
    }, {
      'title': 'Windows',
      'path': '/residential/savings-and-energy/rebates-and-programs/windows',
      'identifier': 'windows'
    }],
    'residential-rates-and-billing': [{
      'title': 'Rate Options',
      'path': '/residential/savings-and-energy/rates-and-billing/rate-options',
      'identifier': 'rate-options'
    }, {
      'title': 'Rates, Rules, and Regulations',
      'path': '/residential/savings-and-energy/rates-and-billing/rates-rules-and-regulations',
      'identifier': 'rates-rules-and-regulations'
    }, {
      'title': 'Understand Your Bill',
      'path': '/residential/savings-and-energy/rates-and-billing/understanding-your-bill',
      'identifier': 'understanding-your-bill'
    }],

    /** Business **/
    'grow-your-business': [{
      'title': 'Contact Us',
      'path': 'https://customerservice2.southerncompany.com/CustService/ContactUs?mnuOpco=gulf',
      'identifier': 'grow-your-business'
    }, {
      'title': 'Developers',
      'path': '/business/savings-and-energy/grow-your-business/developers',
      'identifier': 'developers'
    }, {
      'title': 'Job Creation Rate Incentive',
      'path': '/business/savings-and-energy/grow-your-business/job-creation-rate-incentive',
      'identifier': 'job-creation-rate-incentive'
    }, {
      'title': 'Small Business Connect',
      'path': '/business/savings-and-energy/grow-your-business/business-connect',
      'identifier': 'business-connect'
    }, {
      'title': 'Why do Business in NW Florida?',
      'path': '/business/savings-and-energy/grow-your-business/why-do-business-in-nw-florida',
      'identifier': 'why-do-business-in-nw-florida'
    }],
    'business-rebates-and-programs': [{
      'title': 'Energy Checkup',
      'path': '/business/savings-and-energy/rebates-and-programs/energy-checkup',
      'identifier': 'energy-checkup'
    }, {
      'title': 'Outdoor Lighting',
      'path': '/business/savings-and-energy/rebates-and-programs/outdoor-lighting',
      'identifier': 'outdoor-lighting'
    }, {
      'title': 'Solar Energy',
      'path': '/business/savings-and-energy/rebates-and-programs/solar-energy',
      'identifier': 'solar-energy'
    }, {
      'title': 'Insulation',
      'path': '/business/savings-and-energy/rebates-and-programs/insulation',
      'identifier': 'insulation'
    }, {
      'title': 'Heating and Cooling',
      'path': '/business/savings-and-energy/rebates-and-programs/heating-and-cooling',
      'identifier': 'heating-and-cooling'
    }, {
      'title': 'Roofing',
      'path': '/business/savings-and-energy/rebates-and-programs/roofing',
      'identifier': 'roofing'
    }, {
      'title': 'Commercial Surge Protection',
      'path': '/business/savings-and-energy/rebates-and-programs/commercial-surge-protection',
      'identifier': 'commercial-surge-protection'
    }],
    'business-rates-and-billing': [{
      'title': 'Rates, Rules, and Regulations',
      'path': '/business/savings-and-energy/rates-and-billing/rates-rules-and-regulations',
      'identifier': 'rates-rules-and-regulations'
    }, {
      'title': 'Understand Your Bill',
      'path': '/business/savings-and-energy/rates-and-billing/understanding-your-bill',
      'identifier': 'understanding-your-bill'
    }]
  };

  // Dismiss mobile navigation menu
  $rootScope.dismissMobileMenu = function (e, onlyForThisNode) {
    var onlyForThisNode = onlyForThisNode || false;

    // Either go ahead and hide it regardless of the element clicked or
    // make sure a specific element was clicked before dismissing it
    if (onlyForThisNode == false || onlyForThisNode && e.target == e.currentTarget) {
      // Hide the menu
      $('.mobile-menu, .main-navigation .pancakes').removeClass('opened');

      // Don't scroll
      $('body').removeClass('still');
    }
  };

  // Push subnavigation lists in the mobile menu
  $rootScope.pushSubnavigationList = function (identifier, e, dismissOthers) {
    var subnavigationList = $(e.currentTarget).next('ul');

    if (dismissOthers) {
      // Hide any visible subnavigation lists
      $('.sub-nav').removeClass('revealed');

      // Remove all the selection indicators
      $('.firstLevelSubnavigationLink').removeClass('active-subnavigation-link');
    }

    // Indicate which one was selected
    $('a.' + identifier).toggleClass('active-subnavigation-link');

    // Show the one the user wants to see
    subnavigationList.addClass('revealed');
  };

  // Pop subnavigation lists from the mobile menu
  $rootScope.dismissSubnavigationList = function (identifier) {
    // Hide the subnavigation list
    $('.sub-nav.' + identifier).removeClass('revealed');

    // Remove all the selection indicators
    $('.firstLevelSubnavigationLink').removeClass('active-subnavigation-link');
  };

  // Determine which link to bold
  $rootScope.highlightCurrentPageTitle = function (path) {
    return ($location.path().substr(0, path.length) == path) ? 'current-page-title' : '';
  };

  // Highlight the 'Overview' title if applicable
  $rootScope.highlightCurrentOverviewTitle = function (path) {
    return ($location.path() == path) ? 'current-page-title' : '';
  };
});

// Routes
app.config(function ($routeProvider, $locationProvider) {
  // Problem pages
  $routeProvider.when('/404', {
    controller: 'ProblemPageController',
    templateUrl: '/templates/404.html'
  })

  // Notice pages
  .when('/successfully-unsubscribed', {
    controller: 'NoticePageController',
    templateUrl: '/templates/notices/successfully-unsubscribed.html'
  })

  .when('/sms-terms-of-use', {
    controller: 'NoticePageController',
    templateUrl: '/templates/notices/SMS-Terms-of-Use.html'
  })

  .when('/help-on-outage-alerts', {
    controller: 'NoticePageController',
    templateUrl: '/templates/notices/help-on-outage-alerts.html',
    meta: {
      title: 'Notice Page',
      description: 'Notice Page Description'
    }
  })

  // Welcome
  .when('/', {
    controller: 'HomeController',
    templateUrl: 'templates/home.html',
  })

  // Everything else
  .otherwise({
    redirectTo: '/404'
  });

  // This lets us get rid of the default hash in the URL
  $locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true).hashPrefix('!');
});

// Controllers
app.controller('ContactUsController', function ($scope, $rootScope, $window) {
  $rootScope.title = 'Contact Us';
  $rootScope.name = '';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Contact Us';
  $rootScope.metaDescription = 'Contact Us';
  $rootScope.metaKeywords = '';

  $window.location.href = 'https://customerservice2.southerncompany.com/CustService/ContactUs?mnuOpco=gulf';
});

app.controller('FormController', function ($scope) {
  $scope.accountNumberPattern = /^[0-9]{4}-[0-9]{4}$/;
  $scope.zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
  $scope.phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;

  $scope.hyphenate = function (withModelName, indices) {
    var currentValue = $scope[withModelName];

    // Add a hyphen for all the desired indices
    for (var i=0; i < indices.length; i++) {
      // But only if the hyphen is already missing
      if (currentValue.length >= indices[i] + 1) {
        $scope[withModelName] = currentValue.substr(0, indices[i]) + '-' + currentValue.substr(indices[i] + 1);

        // Add the entered number behind the newly added
        // hyphen unless it's actually a hyphen
        if ($scope[withModelName][$scope[withModelName].length - 1] == '-' && currentValue[indices[i]] != '-') {
          $scope[withModelName] += currentValue[indices[i]];
        }
      }
    }
  };

  $scope.trim = function (withModelName, length) {
    var currentValue = $scope[withModelName];
    $scope[withModelName] = currentValue.substr(0, length + 1);
  };

  $scope.toggleExtraFieldsIfGreaterThanOrEqualTo = function (withModelName, targetSelector, amount) {
    if ($scope[withModelName] >= amount) {
      $scope.showExtraFields('.extra-field' + targetSelector);
    } else {
      $scope.hideExtraFields('.extra-field' + targetSelector);
    }
  };

  $scope.toggleExtraFields = function (targetSelector) {
    $(targetSelector || '.extra-fields').slideToggle(75);
  };

  $scope.showExtraFields = function (targetSelector) {
    $(targetSelector || '.extra-fields').slideDown(75);
  };

  $scope.hideExtraFields = function (targetSelector) {
    $(targetSelector || '.extra-fields').slideUp(75);
  };

  $scope.expandHeight = function (e) {
    $(e.currentTarget).removeClass('inactive');
    $(e.currentTarget).animate({
      'height': '300px'
    }, 150);
  };

  $scope.getRandomSpan = function(){
    return Math.floor((Math.random()*6)+1);
  }

  $scope.collapseHeight = function (e) {
    $(e.currentTarget).addClass('inactive');
    $(e.currentTarget).animate({
      'height': '40px'
    }, 125);
  };
});

app.controller('AppController', function ($scope, $rootScope, $anchorScroll) {
  $scope.searching = false;

  $scope.search = function () {
    // Toggle the search bar
    ($scope.searching) ? $scope.searching = false : $scope.searching = true;
  };

	// scroll to ID [[ ng-click="scrollTo('ID')" /or/ $anchorScroll('ID'); ]]
	$scope.scrollTo = function(id) {
		$anchorScroll(id);
	};
	
  // Find the needed programs and rebates based on the
  // order you call them in the 'withIDs' array
  $scope.neededProgramsAndRebates = function (programsAndRebates, withIDs) {
    var results = [];
    for (var withIDindex = 0; withIDindex < withIDs.length; withIDindex++) {
      for (var programRebateIndex=0; programRebateIndex < programsAndRebates.length; programRebateIndex++) {
        if (withIDs[withIDindex] == programsAndRebates[programRebateIndex].id) {
          results.push(programsAndRebates[programRebateIndex]);
          break;
        }
      }
    }
    return results;
  };

  $scope.neededSafetyTips = function (safetyTips, tipIDs) {
    tipIDs = [Math.floor((Math.random()*tipIDs.length)+1)];
    var results = [];
    for (var tipIDindex = 0; tipIDindex < tipIDs.length; tipIDindex++) {
      for (var safetyTipIndex=0; safetyTipIndex < safetyTips.length; safetyTipIndex++) {
        if (tipIDs[tipIDindex] == safetyTips[safetyTipIndex].id) {
          results.push(safetyTips[safetyTipIndex]);
          break;
        }
      }
    }
    return results;
  };

  $scope.toggleMobileMenu = function () {
    // Go to the top
    window.scrollTo(0, 0);

    // Show the menu
    $('.mobile-menu, .main-navigation .pancakes').toggleClass('opened');

    // Don't scroll
    $('body').toggleClass('still');
  }

  // Programs and Rebates
  $scope.programsAndRebates = [{
    'id': 1,
    'saveAmount': 200,
    'headerPath': '/images/energy-select/house.jpg',
    'name': '[ Program Subheader ]',
    'pageUrl': '/',
    'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quasi architecto beatae vitae dicta sunt.'
  }, {
    'id': 2,
    'saveAmount': 300,
    'headerPath': '/images/energy-select/house-under-construction.jpg',
    'name': '[ Program Subheader ]',
    'pageUrl': '/',
    'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quasi architecto beatae vitae dicta sunt.'
  }, {
    'id': 3,
    'saveAmount': 0,
    'headerPath': '/images/energy-select/washing-machine.jpg',
    'name': '[ Program Subheader ]',
    'pageUrl': '/',
    'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quasi architecto beatae vitae dicta sunt.'
  }, {
    'id': 9,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_Appliances.jpg',
    'name': 'Appliances',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/appliances',
    'description': 'Energy efficient home appliances work hard while using less energy, so you save on your monthly bill. When you upgrade certain appliances, you can also earn a rebate.'
  }, {
    'id': 10,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_EarthCents_Homes.jpg',
    'name': 'EarthCents Home',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/earthcents',
    'description': 'Design your home to be energy efficient from the start for maximum comfort and savings. If you’re ready to build your next home, consider an EarthCents home.'
  }, {
    'id': 11,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_ElectricVehicles.jpg',
    'name': 'Electric Vehicles',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/electric-vehicles',
    'description': 'If you are considering (or have already discovered) the benefits of an electric vehicle, we want to support you. Install a home charging station and we’ll help offset the costs.'
  }, {
    'id': 12,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_EnergyCheckup.jpg',
    'name': 'Energy Checkup',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/energy-checkup',
    'description': 'Get a free analysis of your home’s energy use. Our energy expert will also provide custom recommendations to help you save energy and money.'
  }, {
    'id': 13,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_EnergySelect.jpg',
    'name': 'Energy <span class="select">Select</span>',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/energy-select',
    'description': 'Put the power of savings in your hands. With our unique home energy management program, you can pay a lower electricity price 87% of the time.'
  }, {
    'id': 14,
    'saveAmount': 400,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_HeatingCooling.jpg',
    'name': 'Heating and Cooling',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/heating-and-cooling',
    'description': 'Want to keep your home cool for less? Get your heating and cooling system checked out and see if you qualify for rebates.'
  }, {
    'id': 15,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_Insulation_Envelope.jpg',
    'name': 'Insulation and Ducts',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/insulation-envelope-and-ducts',
    'description': 'Holes and leaks aren’t always obvious in homes. Make sure your insulation, envelope and ducts are keeping the heat and air in, so you don’t let energy and savings leak away.'
  }, {
    'id': 16,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_OutdoorLighting.jpg',
    'name': 'Outdoor Lighting',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/outdoor-lighting',
    'description': 'Increase the beauty and safety of your home with our outdoor lighting options. We can even take care of the installation and maintenance for you.'
  }, {
    'id': 17,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_PoolPumpsHeating.jpg',
    'name': 'Pool Pumps and Heating',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/pool-pumps',
    'description': 'Swimming pools can cause higher energy bills. We’ll help you create a high efficiency system so you can enjoy your pool — and more savings.'
  }, {
    'id': 18,
    'saveAmount': 400,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_Roofing.jpg',
    'name': 'Roofing',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/roofing',
    'description': 'Install or upgrade to energy efficient roofing materials to help lower your power bill. You can also earn cash back, up to a maximum of $400.'
  }, {
    'id': 19,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_SmartEnergy.jpg',
    'name': 'Smart Energy',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/smart-energy',
    'description': 'We have installed Smart Meters at customers’ homes to help you better manage your energy, and to help us more quickly identify and respond to outages.'
  }, {
    'id': 20,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_Solar.jpg',
    'name': 'Solar',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/solar',
    'description': 'Find out why solar is a great complement to your electric service and discover the solutions we offer to customers who are interested in renewable energy.'
  }, {
    'id': 21,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_SurgeProtection.jpg',
    'name': 'Surge Protection',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/surge-protection',
    'description': 'Don’t let power surges damage your valuable home appliances and electronics. We offer two surge protection plans to protect your entire home.'
  }, {
    'id': 22,
    'saveAmount': 0,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_WaterHeaters.jpg',
    'name': 'Water Heaters',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/water-heaters',
    'description': 'Electric water heaters use much less energy than gas water heaters. Switch and you can receive a new water heater — for free!'
  }, {
    'id': 23,
    'saveAmount': 300,
    'headerPath': '/images/residential/story-tile-headers/ProgramTile_Res_Windows.jpg',
    'name': 'Windows',
    'pageUrl': '/residential/savings-and-energy/rebates-and-programs/windows',
    'description': 'Energy efficient windows keep your home comfortable and help you save energy and money every month. Upgrade and you can get up to $300 in rebates.'
  }, /* Business Programs and Rebates start here */ {
    'id': 24,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_EnergyCheckup.jpg',
    'name': 'Energy Checkup',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/energy-checkup',
    'description': 'Get a free Energy Checkup report for your business and receive personalized recommendations on how to save, based on your company’s previous energy use.'
  }, {
    'id': 25,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/Program_Tile_Understanding_Energy_Use.jpg',
    'name': 'Understanding Energy Use',
    'pageUrl': 'http://c03.apogee.net/contentplayer/?utilityid=gulfpower&coursetype=ud',
    'description': 'Demand charges can seem very confusing at first. Our interactive tool shows you how energy use impacts demand and consumption for your business.'
  }, {
    'id': 26,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_CommercialSurgeProtection.jpg',
    'name': 'Commercial Surge Protection',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/commercial-surge-protection',
    'description': 'Protect your business’s equipment and appliances from power surges that can cause damage and impact your operations.'
  }, {
    'id': 27,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_Insulation.jpg',
    'name': 'Insulation',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/insulation',
    'description': 'Proper insulation helps you manage your energy costs. Get 15 cents per sq. ft., up to $1,500 per customer, to improve ceiling insulation in existing buildings.'
  }, {
    'id': 28,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_HeatingCooling.jpg',
    'name': 'Heating and Cooling',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/heating-and-cooling',
    'description': 'Keep your employees and customers comfortable year-round. Get discounts for optimization of existing systems, as well as incentives from $125 to $250 per ton for system upgrades.'
  }, {
    'id': 29,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_Roofing.jpg',
    'name': 'Roofing',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/roofing',
      'description': 'An energy efficient roof makes it easier to keep your space cool. Earn 10 cents per sq. ft., up to $5,000 per customer, for reflective roofing installed above air conditioned space.'
  }, {
    'id': 30,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_GrowYourBusiness.jpg',
    'name': 'Grow Your Business',
    'pageUrl': '/business/savings-and-energy/grow-your-business',
    'description': "Whether you're looking to establish a new business or ready to expand an existing one, we offer advice, incentives and other opportunities to help you succeed."
  }, {
    'id': 31,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_SaveMoney.jpg',
    'name': 'Rebates and Programs',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs',
    'description': "Use our free tools and information to help you understand how you're using electricity, and find opportunities to save when you make energy efficient upgrades at your business."
  }, {
    'id': 32,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_Developers.jpg',
    'name': 'Developers',
    'pageUrl': '/business/savings-and-energy/grow-your-business/developers',
    'description': 'We want your development and construction projects to go smoothly. Use this section as a guide to find important process guidelines and other helpful information.'
  }, {
    'id': 33,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Res_RatesAndBilling.jpg',
    'name': 'Rates and Billing',
    'pageUrl': '/business/savings-and-energy/rates-and-billing',
    'description': 'Have questions about your rate, or want to better understand your bill and various payment options? Read up on our business rate options and other billing-related topics.'
  }, {
    'id': 34,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_BusinessConnect.jpg',
    'name': 'Business Connect',
    'pageUrl': '/business/savings-and-energy/grow-your-business/business-connect',
    'description': 'Explore our directory of free resources and local support organizations that can help your small business grow and succeed.'
  }, {
    'id': 35,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_OutdoorLighting.jpg',
    'name': 'Outdoor Lighting',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/outdoor-lighting',
    'description': 'Increase the appeal and safety of your business with our outdoor lighting options. We can even take care of the installation and maintenance for you.'
  }, {
    'id': 36,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_Solar.jpg',
    'name': 'Solar Energy',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/solar-energy',
    'description': 'Find out why solar is a great complement to your electric service and discover the solutions we offer to customers who are interested in renewable energy.'
  }, {
    'id': 37,
    'saveAmount': 0,
    'headerPath': '/images/business/story-tile-headers/ProgramTile_Bus_SurgeProtection.jpg',
    'name': 'Commercial Surge Protection',
    'pageUrl': '/business/savings-and-energy/rebates-and-programs/commercial-surge-protection',
    'description': 'Don’t let power surges damage your valuable equipment and electronics. We offer two surge protection plans to fully protect your business.'
  }, {
	'id': 99,
	'saveAmount': 0,
    'headerPath': '/images/about-us/story-tile-headers/StoryTile_AboutUs_NewsCenter.jpg',
    'name': 'NewsCenter',
    'pageUrl': 'http://www.gulfpowernews.com',
    'description': 'Read the latest Gulf Power news and information at our news site. You can also find resources for the members of the media.'
  }, {
		'id': 98,
		'saveAmount': 0,
    'headerPath': '/images/about-us/story-tile-headers/StoryTile_AboutUs_InvestingInTheFuture.jpg',
    'name': 'Investing in the Future',
    'pageUrl': '/about-us/investing-in-the-future',
    'description': 'Learn about Gulf Power\'s request with the Florida Public Service Commission to invest in the long-term reliability of Northwest Florida\'s energy infrastructure.'
   }];

/*
  // Misc Set [ TEST ]
  $scope.miscellaneousSet = [{
    'id': 1,
    'headerPath': '/images/about-us/story-tile-headers/StoryTile_AboutUs_NewsCenter.jpg',
    'name': 'NewsCenter',
    'pageUrl': 'http://www.gulfpowernews.com',
    'description': 'Read the latest Gulf Power news and information at our news site. You can also find resources for the members of the media.'
  }, {
    'id': 2,
    'headerPath': '/images/about-us/story-tile-headers/StoryTile_AboutUs_InvestingInTheFuture.jpg',
    'name': 'Investing in the Future',
    'pageUrl': '/about-us/',
    'description': 'Learn about Gulf Power\'s request with the Florida Public Service Commission to invest in the long-term reliability of Northwest Florida\'s energy infrastructure.'
  }];
*/


  // Random 20 Questions Question
  var randomQuestion = [
    'Question #1: Why am I starting a business?',
    'Question #2: What kind of business do I want?',
    'Question #3: Who is my ideal customer?',
    'Question #4: What products or services will my business provide?',
    'Question #5: Am I prepared to spend the time and money needed to get my business started?',
    'Question #6: What differentiates my business idea and the products or services I will provide from others in the market?',
    'Question #7: Where will my business be located?',
    'Question #8: How many employees will I need?',
    'Question #9: What types of suppliers do I need?',
    'Question #10: How much money do I need to get started?',
    'Question #11: Will I need to get a loan?',
    'Question #12: How soon will it take before my products or services are available?',
    'Question #13: How long do I have until I start making a profit?',
    'Question #14: Who is my competition?',
    'Question #15: How will I price my product compared to my competition?',
    'Question #16: How will I set up the legal structure of my business?',
    'Question #17: What taxes do I need to pay?',
    'Question #18: What kind of insurance do I need?',
    'Question #19: How will I manage my business?',
    'Question #20: How will I advertise my business?'
  ];
  randomQuestion = randomQuestion[[Math.floor(Math.random() * randomQuestion.length)]];

  // Banners
  $scope.bannerData = [{
    'id': 0,
    'title': '[ Advertisement Header ]',
    'imagePath': 'url(\'/images/background-images/banner-Background-Paperless.jpg\')',
    'description': '<p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>',
    'linksTo': '/#/',
    'linkText': 'Read More'
  }, {
    'id': 1,
    'title': 'Paperless Billing',
    'imagePath': 'url(\'/images/background-images/banner-Background-Paperless.jpg\')',
    'description': 'Want to switch to paperless billing? It comes with many benefits, and getting started is simple.',
    'linksTo': 'https://customerservice.southerncompany.com/NonSecure/LoginFrames.aspx?ReturnUrl=%2fMyAccount.aspx%3fmnuOpco%3dgulf%26mnuType%3dres&mnuOpco=gulf&mnuType=res',
    'linkText': 'Get Started',
    'shouldOpenWithNewTab': true
  }, {
    'id': 2,
    'title': 'Energy Assistance and Conservation Programs',
    'imagePath': 'url(\'/images/background-images/banner-background-energy-assistance.jpg\')',
    'description': '\
      <p>Gulf Power will offer a $20 monthly power bill credit to help low-income customers (qualified by participation in a federal assistance program) as we transition to the new rate design.</p> \
      <p>The new rate design will also allow for additional conservation programs that promote energy efficiency and help customers save even more money and energy. </p> \
    '
  }, {
    'id': 3,
    'title': 'Join the r<span class="ev">EV</span>olution!',
    'imagePath': 'url(\'/images/background-images/Ad_Res_ElectricVehicles.jpg\')',
    'description': '\
      <p>Learn more about the benefits of choosing electric vehicles, and find the right EV for you, at Southern Company\'s r<span class="ev">EV</span>olution site.</p> \
    ',
    'linksTo': 'http://joinevrevolution.com/',
    'linkText': 'Get Started',
    'shouldOpenWithNewTab': true
  }, {
    'id': 4,
    'title': 'An Award-Winning Program',
    'imagePath': 'url(\'/images/background-images/resources_res_energyselect.jpg\')',
    'description': '\
      <p>SMARTGRID Customer Education Award 2015</p> \
      <p>POWERGRID International Demand Response/Energy Efficiency Project of the Year Recipient 2012</p> \
    '
  }, {
    'id': 5,
    'title': 'Your Energy 101 Primer',
    'imagePath': 'url(\'/images/background-images/banner-Background-Paperless.jpg\')',
    'description': '<p>Explore our Home Energy Library to find information on a wide variety of home energy subjects.</p>',
    'linksTo': 'http://c03.apogee.net/contentplayer/?utilityid=gulfpower&coursetype=res',
    'linkText': 'Get Started',
    'shouldOpenWithNewTab': true
  }, {
    'id': 6,
    'title': 'Economic Symposium',
    'imagePath': 'url(\'/images/background-images/Ad_Bus_GrowYourBusiness.jpg\')',
    'description': '<p>Register now for our annual regional Economic Symposium.</p>',
    'linksTo': 'http://www.gulfpowersymposium.com/',
    'linkText': 'Learn More',
    'shouldOpenWithNewTab': true
  }, {
    'id': 7,
    'title': 'The U.S. Small Business Administration',
    'imagePath': 'url(\'/images/background-images/banner-Background-Paperless.jpg\')',
    'description': '<h2>20 Questions to Ask Before Starting a New Business</h2><p>' + randomQuestion + '</p>',
    'linksTo': 'https://www.sba.gov/starting-business/how-start-business/20-questions-starting',
    'linkText': 'Read The Rest Here',
    'shouldOpenWithNewTab': true
  }, {
    'id': 8,
    'title': 'Free Energy Saving Newsletter',
    'imagePath': 'url(\'/images/background-images/banner-Background-Paperless.jpg\')',
    'description': '<p>Get <em>Current Connection</em>, our free monthly newsletter with energy saving tips and trends for businesses.</p>',
    'linksTo': 'http://members.questline.com/Login.aspx?accountID=3923',
    'linkText': 'Sign Up',
    'shouldOpenWithNewTab': true
  }, {
    'id': 9,
    'title': 'Learning Power',
    'imagePath': 'url(\'/images/background-images/banner-Background-Learning-Power.png\')',
    'description': '<p>Explore how electricity works to power your life and learn about electric safety.</p>',
    'linksTo': 'http://www.learningpower.org/gulf/',
    'linkText': 'Learn More',
    'shouldOpenWithNewTab': true
  }, {
    'id': 10,
    'title': 'Visit the Storm Ready Center',
    'imagePath': 'url(\'/images/background-images/banner-Background-Paperless.jpg\')',
    'description': '<p>Are you ready for inclement weather? Visit the Storm Ready Center for information on storm preparation, outage updates, and more tips and tools.</p>',
    'linksTo': 'http://www.gulfpowernews.com/storm-ready-center/',
    'linkText': 'Read More',
    'shouldOpenWithNewTab': true

  }];

  $scope.safetyTips = [{
    'id': 1,
    'title': 'Call Before You Dig!',
    'description': 'Check state laws before beginning construction; underground power lines and other utilities pose a hazard to workers.'
  }, {
    'id': 2,
    'title': 'Power Lines',
    'description': 'Always assume that downed power lines are live and dangerous; keep children and pets away.'
  }, {
    'id': 3,
    'title': 'Around the House',
    'description': 'Keep children safe from electrical shocks by installing safety covers on all outlets. '
  }, {
    'id': 4,
    'title': 'Power Tools and Cords',
    'description': 'Be sure power tools are switched off before plugging them in or unplugging them.'
  }, {
    'id': 5,
    'title': 'Machinery and Power Lines',
    'description': 'Avoid contact with overhead wiring when operating machinery; distance is the best protection.'
  }, {
    'id': 6,
    'title': 'Safety Circuits, Wiring and GFCIs',
    'description': 'Disconnect appliances that spark or blow a fuse immediately to avoid electrical fires.'
  }, {
    'id': 7,
    'title': 'Electrical Fires',
    'description': 'Be prepared for an emergency by familiarizing yourself with the location of fire extinguishers and escape routes.'
  }];


  $scope.testimonials = [{
    'id': 1,
    'type': 'business',
    'claim': '<p>Business Testimonial - Since I started using Energy <span class="select">Select</span>, not only is my energy use under my complete control, but I\'m saving literally hundreds of dollars a year.</p>',
    'customerName': 'David Hudson',
    'customerLocation': 'Pensacola, FL',
    'linksTo': '/#/'
  }, {
    'id': 2,
    'type': 'residential',
    'title': 'Residential Testimonial',
    'claim': '<p>Since I started using Energy <span class="select">Select</span>, not only is my energy use under my complete control, but I\'m saving literally hundreds of dollars a year.</p>',
    'customerName': 'David Hudson',
    'customerQuality': 'Homeowner'
  }, {
    'id': 3,
    'type': 'residential',
    'title': 'Residential Testimonial',
    'claim': '<p>As an Energy <span class="select">Select</span> customer, you have access to a team of representatives that are dedicated to supporting Energy <span class="select">Select</span> matters from adjusting your thermostat to helping you navigate our convenient web portal on any computer or mobile device with internet access.</p>',
    'customerName': 'Alex Gonzalez',
    'customerQuality': 'Gulf Power Customer Care Center Associate'
  }, {
    'id': 4,
    'type': 'residential',
    'claim': '<p>I want them to know I am investing in their future and our family is committed to renewable energy. Some things aren\'t about the cost. It\'s about what we invest in for our future.</p>',
    'customerName': 'Lonnie',
    'customerQuality': 'Gulf Power employee and customer, on committing to three subscriptions — one for each of her three children'
  }, {
    'id': 5,
    'type': 'residential',
    'title': 'Residential Testimonial',
    'claim': '<p>Once you get Energy Select installed and you get the programming the way you like it, you can forget about it. It works. It saves money."</p>',
    'customerName': 'Randy O\'Connor',
    'customerQuality': 'Energy Select Customer since 2001.'
  }, {
    'id': 6,
    'type': 'business',
    'claim': '<p>I am extremely pleased with Gulf Power and their Lighting Consultants. They are extremely easy to work with and truly have their customers’ best interest at heart. Their new LED lighting products are the state of the art. The install was absolutely painless and the customers love the security these new lights bring to our Sonny’s customers.</p>',
    'customerName': 'Wayne Lindsey',
    'customerQuality': 'Sonny’s BBQ – Bay County, FL'
  }, {
    'id': 7,
    'type': 'residential',
	'title': 'Residential Testimonial',
    'claim': '<p>The Energy Checkup provided by Gulf Power proved to be invaluable. The AC company reviewed the recommendations on the checkup and installed the proper size AC unit for our home.</p>',
    'customerName': 'John Telhiard',
    'customerQuality': 'Gulf Power Customer – Pensacola, FL'
  }];
});
