'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module("myCV", []);

myApp.controller("getAboutMe", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/Info.json').success(function(data) {
    $scope.result = data;
  });
}]);

myApp.controller("getSummary", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/summary.json').success(function(data) {
    $scope.result = data;
  });
}]);

myApp.controller("getExperience", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/experience.json').success(function(data) {
    $scope.result = data;
  });
}]);

myApp.controller("getProject", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/project.json').success(function(data) {
    $scope.result = data;
  });
}]);

myApp.controller("getSkill", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/skill.json').success(function(data) {
    $scope.result = data;
  });
}]);

myApp.controller("getEducation", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/education.json').success(function(data) {
    $scope.result = data;
  });
}]);

myApp.controller("navController", function ($scope, $location) {
  $scope.isCollapsed = true;

  $scope.$on('$routeChangeSuccess', function () {
    $scope.isCollapsed = true;
    alert("huhuuhu");
  });
});


