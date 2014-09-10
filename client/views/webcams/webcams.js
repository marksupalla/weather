/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Current Webcam Views';
    $scope.getWebcams = function(){
      var url = 'http://api.wunderground.com/api/e972031c42874e44/webcams/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.webcams = response.data.webcams;
        console.log(response);
      });
    };
  }]);
})();
