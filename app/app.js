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
  $scope.AddItem = function () {
    if (!$scope.AddSummary) {return;}
    if ($scope.result.indexOf($scope.AddSummary) == -1) {
      var temp = {"value": $scope.AddSummary};
      $scope.result.push(temp);
    }
  }
  $scope.removeItem = function (x) {
    $scope.result.splice(x, 1);
  }
}]);

myApp.controller("getExperience", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/experience.json').success(function(data) {
    $scope.result = data;
  });
  $scope.AddItem = function () {
    if (!$scope.job) {
      return;
    }
    if ($scope.result.indexOf($scope.job) == -1) {
      var temp = {
        "year": $scope.year,
        "job": $scope.job,
        "place": $scope.place,
        "tasks": [{"value": $scope.value}]
      };
      $scope.result.push(temp);
    }
  }
}]);

myApp.controller("getProject", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/project.json').success(function(data) {
    $scope.result = data;
  });

  $scope.AddItem = function () {
    if (!$scope.name) {return;}
    if ($scope.result.indexOf($scope.name) == -1) {
      var temp = {"name": $scope.name,
                  "decription": $scope.decription};
      $scope.result.push(temp);
    }
  }
}]);

myApp.controller("getSkill", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/skill.json').success(function(data) {
    $scope.result = data;
  });

  $scope.AddItem = function () {
    if (!$scope.name) {return;}
    if ($scope.result.indexOf($scope.name) == -1) {
      var temp = {"name": $scope.name,
        "exp": $scope.exp};
      $scope.result.push(temp);
    }
  }
}]);

myApp.controller("getEducation", ['$scope', '$http', function($scope, $http){
  $http.get('Profile/education.json').success(function(data) {
    $scope.result = data;
  });

  $scope.AddItem = function () {
    if (!$scope.job) {
      return;
    }
    if ($scope.result.indexOf($scope.job) == -1) {
      var temp = {
        "year": $scope.year,
        "job": $scope.job,
        "place": $scope.place,
        "data": [{"value": $scope.value}]
      };
      $scope.result.push(temp);
    }
  }
}]);

myApp.controller("navController", function ($scope, $location) {
  $scope.isCollapsed = true;

  $scope.$on('$routeChangeSuccess', function () {
    $scope.isCollapsed = true;
    alert("huhuuhu");
  });
});


