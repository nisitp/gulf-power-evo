app.config(function ($routeProvider) {
  $routeProvider.when('/template', {
    templateUrl: 'templates/template.html',
    controller: 'TemplateController'
  });
});

app.controller('TemplateController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'Template';
  $rootScope.name = 'template';
  $rootScope.classes = 'template';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';

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
});


app.config(function ($routeProvider) {
  $routeProvider.when('/search-results', {
    templateUrl: 'templates/search-results.html',
    controller: 'SearchResultsController'
  });
});

app.controller('SearchResultsController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'Search Results';
  $rootScope.name = 'search-results';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.shouldHideBanner = true;
});
