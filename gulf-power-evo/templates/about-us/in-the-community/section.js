// About Us
app.config(function ($routeProvider) {
  // landing page
  $routeProvider.when('/about-us/in-the-community', {
    templateUrl: 'templates/about-us/in-the-community/index.html',
    controller: 'InTheCommunityHomeController'
  });
});

app.controller('InTheCommunityHomeController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'In the Community';
  $rootScope.name = 'in-the-community';
  $rootScope.classes = 'landing-page';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';

  $document.ready(function () {
    var slideshow = $('.how-we-give-back-slideshow')
    .on('init', function () {
      $('.how-we-give-back-slideshow .slick-slide > div').matchHeight();
    })
    .slick({
      prevArrow: $('.slideshow + .slide-navigation-buttons .last-slide-button'),
      nextArrow: $('.slideshow + .slide-navigation-buttons .next-slide-button')
    });
  });
});

// Plant Crist Scrubber
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/in-the-community/plant-crist-scrubber', {
    templateUrl: 'templates/about-us/in-the-community/plant-crist-scrubber.html',
    controller: 'PlantCristScrubberController'
  });
});

app.controller('PlantCristScrubberController', function ($scope, $rootScope) {
  $rootScope.title = 'Plant Crist Scrubber';
  $rootScope.name = 'plant-crist-scrubber';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Plant Crist Scrubber';
  $rootScope.metaDescription = 'Learn about the Plant Crist scrubber, a key factor in Gulf Power reducing overall emissions by more than 85 percent since 1992.';
  $rootScope.metaKeywords = 'Plant crist, scrubber, scrubber system, reducing emissions, sulfur dioxide emissions, oxidized mercury emissions, gulf power';
});