// Grow Your Business
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/business/savings-and-energy/grow-your-business', {
    templateUrl: 'templates/business/savings-and-energy/grow-your-business/index.html',
    controller: 'GrowYourBusinessHomeController'
  });
});

app.controller('GrowYourBusinessHomeController', function ($scope, $rootScope) {
  $rootScope.title = 'Grow Your Business';
  $rootScope.name = 'grow-your-business';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';
});

// Business Connect
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/grow-your-business/business-connect', {
    templateUrl: 'templates/business/savings-and-energy/grow-your-business/business-connect.html',
    controller: 'BusinessConnectController'
  });
});

app.controller('BusinessConnectController', function ($scope, $rootScope) {
  $rootScope.title = 'Business Connect';
  $rootScope.name = 'business-connect';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';

  $.getScript('/js/business-connect.js');
});

// Why do business in Northwest Florida?
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/grow-your-business/why-do-business-in-nw-florida', {
    templateUrl: 'templates/business/savings-and-energy/grow-your-business/why-do-business-in-nw-florida.html',
    controller: 'WhyDoBusinessController'
  });
});

app.controller('WhyDoBusinessController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'Why Do Business in Northwest Florida?';
  $rootScope.name = 'why-do-business-in-nw-florida';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Why Do Business in Northwest Florida';
  $rootScope.metaDescription = 'Learn why Northwest Florida is a good location for all business sizes and industries, and how Gulf Power plays a role in that.';
  $rootScope.metaKeywords = 'northwest florida, florida, businesses, incentives, taxes, tax breaks, climate, location, relocate, beaches, economic development, economy';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';
  
  $.getScript('/js/why-do-business-in-nw-florida.js');

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
      prevArrow: $('.slideshow .last-slide-button'),
      nextArrow: $('.slideshow .next-slide-button')
    });
  });
});

// Job Creation Rate Incentive
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/grow-your-business/job-creation-rate-incentive', {
    templateUrl: 'templates/business/savings-and-energy/grow-your-business/job-creation-rate-incentive.html',
    controller: 'JobCreationRateIncentiveController'
  });
});

app.controller('JobCreationRateIncentiveController', function ($scope, $rootScope) {
  $rootScope.title = 'Job Creation Rate Incentive';
  $rootScope.name = 'job-creation-rate-incentive';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Job Creation Rate Incentive';
  $rootScope.metaDescription = 'Learn how business that relocate to Northwest Florida can qualify for a lower rate with Gulf Power over the course of four years.';
  $rootScope.metaKeywords = 'businesses, business, electricity, power, energy, incentive, relocate, move, savings Northwest Florida';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';
});

// Developers
app.config(function ($routeProvider) {
  $routeProvider.when('/business/savings-and-energy/grow-your-business/developers', {
    templateUrl: 'templates/business/savings-and-energy/grow-your-business/developers.html',
    controller: 'BusDevelopersController'
  });
});

app.controller('BusDevelopersController', function ($scope, $rootScope) {
  $rootScope.title = 'Developers';
  $rootScope.name = 'developers';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Developers';
  $rootScope.metaDescription = 'Resources and information for builders and developers operating within the Gulf Power service area.';
  $rootScope.metaKeywords = 'new construction, builders, developers, electric service, Northwest Florida';
  $rootScope.crossSectionUrl = '/residential/savings-and-energy';
});
