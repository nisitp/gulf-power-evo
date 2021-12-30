// Education and Workforce Development
app.config(function ($routeProvider) {
// landing page
  $routeProvider.when('/about-us/education-and-workforce-development', {
    templateUrl: 'templates/about-us/education-and-workforce-development/index.html',
    controller: 'EducationWorkforceHomeController'
  });
});

app.controller('EducationWorkforceHomeController', function ($scope, $rootScope, $document) {
  $rootScope.title = 'Education and Workforce Development';
  $rootScope.name = 'education-and-workforce-development';
  $rootScope.classes = 'landing-page';
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
      prevArrow: $('.slideshow .last-slide-button'),
      nextArrow: $('.slideshow .next-slide-button')
    });
  });
});

// STEM education resources
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/education-and-workforce-development/stem-education-resources', {
    templateUrl: 'templates/about-us/education-and-workforce-development/stem-education-resources.html',
    controller: 'StemEducationResourcesController'
  });
});

app.controller('StemEducationResourcesController', function ($scope, $rootScope) {
  $rootScope.title = 'STEM Education Resources';
  $rootScope.name = 'stem-education-resources';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'STEM Education Resources';
  $rootScope.metaDescription = 'A collection of activities, resources and information for STEM educators.';
  $rootScope.metaKeywords = '';
});

// Solar for schools
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/education-and-workforce-development/solar-for-schools', {
    templateUrl: 'templates/about-us/education-and-workforce-development/solar-for-schools.html',
    controller: 'SolarForSchoolsController'
  });
});

app.controller('SolarForSchoolsController', function ($scope, $rootScope) {
  $rootScope.title = 'Solar for Schools';
  $rootScope.name = 'solar-for-schools';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Solar for Schools';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
});

// Find Career Development Programs
app.config(function ($routeProvider) {
  $routeProvider.when('/about-us/education-and-workforce-development/find-career-development-programs', {
    templateUrl: 'templates/about-us/education-and-workforce-development/find-career-development-programs.html',
    controller: 'FindCareerDevelopmentProgramsController'
  });
});

app.controller('FindCareerDevelopmentProgramsController', function ($scope, $rootScope) {
  $rootScope.title = 'Career Development';
  $rootScope.name = 'find-career-development-programs';
  $rootScope.classes = '';
  $rootScope.metaTitle = 'Career Development';
  $rootScope.metaDescription = 'Resources and information for students interested in energy careers.';
  $rootScope.metaKeywords = '';
});
