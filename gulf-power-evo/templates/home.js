// Controllers
app.controller('HomeController', function ($scope, $rootScope, $document, $http, $location) {
  $rootScope.title = 'Home';
  $rootScope.name = 'home';
  $rootScope.classes = '';
  $rootScope.metaTitle = '';
  $rootScope.metaDescription = '';
  $rootScope.metaKeywords = '';
  $rootScope.forecastLink = 'http://www.gulfpowernews.com/storm-ready-center';
  $scope.displayForecast = false;

  $document.ready(function () {
    $http.get('tweets.aspx').then(function () {
      $('#tweet-feed').load("/cache/twitter.txt");
    });

    // Request the users' location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // We've got the users' location; Find
        // out how far they are from Pensacola
        var milesFromPensacola = haversineMilesBetween(position.coords.latitude, position.coords.longitude, 30.4213, -87.2169);

        // Check for cached data since the user is so far from Pensacola
        if (milesFromPensacola >= 100) {
          // Get the server to check for cached data for Pensacola
          // because the user is farther than 100 miles from it
          $http.get('WeatherData.cshtml').then(function (response) {
            response = response.data.weatherData;
            $scope.updateWeatherData(response.data.city.name, response.data.list[0].main.temp, response.data.list[0].weather[0].id, response.data.list[0].weather[0].main, response.data.list[0].dt_txt, response.data.list[0].weather[0].icon);
          });
        } else {
          // Get more accurate information because the
          // user is within 100 miles of Pensacola
          $http({
            method: 'GET',
            url: 'https://pro.openweathermap.org/data/2.5/forecast/city',
            params: {
              "id": "4168228", // 4168228 = Pensacola, FL
              "APPID": "aa2b314cc89efa9600066b117c8508db",
              "lat": position.coords.latitude,
              "lon": position.coords.longitude,
              "units": "imperial"
            }
          }).then(function (response) {
            // Update the view
            $scope.updateWeatherData(response.data.city.name, response.data.list[0].main.temp, response.data.list[0].weather[0].id, response.data.list[0].weather[0].main, response.data.list[0].dt_txt);

            // Update the Pensacola weather data on the server
            $http({
              method: 'POST',
              url: 'WeatherData.cshtml',
              headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'},
              data: {
                weatherData: response
              }
            });
          });
        }
      }, function (err) {
        // We don't have the users' location
        console.error('Couldn\'t get your location. Here\'s why:', err.message);
      });
    }
  });

  $scope.updateWeatherData = function (cityName, tempurature, forecastCode, forecastName, forecastDateTime, forecastIconFilename) {
    console.log(forecastIconFilename);
    var get = $location.search();

    // Update the weather data
    $scope.weatherCityName = cityName;
    $scope.tempurature = Math.floor(get['temperature'] || tempurature);
    $scope.forecastName = forecastName;
    forecastDateTime = forecastDateTime.replace(/-/g, '/').replace(' ', 'T');
    $scope.forecastIconFilename = forecastIconFilename || '04n';

    // Format the data of the forecast
    var forecastDateTime = new Date();
    var dayName = [
      "Sun.",
      "Mon.",
      "Tue.",
      "Wed.",
      "Thu.",
      "Fri.",
      "Sat."
    ][forecastDateTime.getDay()];

    var monthName = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec."
    ][forecastDateTime.getMonth()];

    // Set the formatted forecast date
    $scope.forecastDateTime = dayName + ', ' + monthName + ' ' + forecastDateTime.getDate();

    // Choose an appropriate promo message
    $scope.forecastPromo = "It\'s a beautiful day - the perfect kind of day to check your HVAC units for full cooling efficiency and maximum savings.";
    if (forecastCode >= 800 && forecastCode <= 804) {
      // It's clear out
      if ($scope.tempurature > 85) {
        $scope.forecastPromo = "It\'s a great day to save money and energy! View our savings tips and tools to learn how to keep your home cool for less. ";
        $rootScope.forecastLink = '/residential/savings-and-energy/savings-tips-and-tools';
      } else if ($scope.tempurature > 65 && $scope.tempurature <= 85) {
        $scope.forecastPromo = 'Take control of your savings! With Energy Select, you could be paying less for electricity 87% of the time.';
        $rootScope.forecastLink = '/residential/savings-and-energy/rebates-and-programs/energy-select';
      } else if ($scope.tempurature > 45 && $scope.tempurature <= 65) {
        $scope.forecastPromo = 'Ready to replace your gas heating system? You may qualify for a $400 incentive when you install a high efficiency heat pump.';
        $rootScope.forecastLink = '/residential/savings-and-energy/rebates-and-programs/heating-and-cooling';
      } else if ($scope.tempurature <= 45) {
        $scope.forecastPromo = 'Did you know that adjusting your thermostat during the day wastes energy and money? Try setting your thermostat consistently to 68°F in cooler weather.';
        $rootScope.forecastLink = '/residential/savings-and-energy/savings-tips-and-tools';
      }
    } else if (forecastCode >= 300 && forecastCode <= 781) {
      // It's rainy
      if ($scope.tempurature > 85) {
        $scope.forecastPromo = 'It\'s warm outside, but you can save money while you stay cool. Set your thermostat consistently at 78°F to avoid wasting energy.';
        $rootScope.forecastLink = '/residential/savings-and-energy/savings-tips-and-tools';
      } else if ($scope.tempurature > 65 && $scope.tempurature <= 85) {
        $scope.forecastPromo = 'Did you know that a ceiling fan could save you money? A fan will allow you to raise the thermostat setting by about 4°F with no reduction in comfort.';
        $rootScope.forecastLink = '/residential/savings-and-energy/savings-tips-and-tools';
      } else if ($scope.tempurature > 45 && $scope.tempurature <= 65) {
        $scope.forecastPromo = 'Drafty windows? Stay warm and save money with the EarthCents window replacement incentive program';
        $rootScope.forecastLink = '/residential/savings-and-energy/rebates-and-programs/windows';
      } else if ($scope.tempurature <= 45) {
        $scope.forecastPromo = 'Stay up to date with storm progress and power outages with our Storm Preparation tools and tips.';
        $rootScope.forecastLink = 'http://www.gulfpowernews.com/storm-ready-center';
      }
    } else if (forecastCode >= 200 && forecastCode <= 232) {
      if ($scope.tempurature > 85) {
        $scope.forecastPromo = 'Keep your loved ones safe, whatever the weather. View our storm preparation tips.';
        $rootScope.forecastLink = 'http://www.gulfpowernews.com/storm-ready-center';
      } else if ($scope.tempurature > 65 && $scope.tempurature <= 85) {
        $scope.forecastPromo = 'Are you prepared for inclement weather? Track power outages and restoration.';
        $rootScope.forecastLink = '/storm-ready-center/power-outage-map';
      } else if ($scope.tempurature > 45 && $scope.tempurature <= 65) {
        $scope.forecastPromo = 'Be ready for the weather. Stay safe with our storm preparation tips and tools.';
        $rootScope.forecastLink = 'http://www.gulfpowernews.com/storm-ready-center';
      } else if ($scope.tempurature <= 45) {
        $scope.forecastPromo = 'Preparation is key for storm safety. Learn how to keep your home and family safe.';
        $rootScope.forecastLink = 'http://www.gulfpowernews.com/storm-ready-center';
      }
    }

    // Show the forecast now that we've got everything
    $scope.displayForecast = true;
  }
});

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

function haversineMilesBetween(latitude1, longitude1, latitude2, longitude2) {
  var earthRadius = 6371; // Kilometers
  var dLat = deg2rad(latitude2 - latitude1);  // deg2rad below
  var dLon = deg2rad(longitude2 - longitude1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(latitude1)) * Math.cos(deg2rad(latitude2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = earthRadius * c;
  return d / 1.609344; // Miles
}
