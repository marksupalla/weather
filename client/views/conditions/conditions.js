/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Current Conditions';
    $scope.getConditions = function(){
      var url = 'http://api.wunderground.com/api/e972031c42874e44/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.icon = response.data.current_observation.icon_url;
        $scope.weather = response.data.current_observation.weather;
        $scope.wind = response.data.current_observation.wind_mph;
        console.log(response);
      });
    };
  }]);
})();
