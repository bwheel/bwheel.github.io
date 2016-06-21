var App = angular.module('App', [])


App.controller('educationController', function($scope, $http){
    $http.get('data/education.json')
    .then(function (res) {
        $scope.education = res.data;
    });
});

App.controller('skillsController', function($scope, $http){
    $http.get('data/skills.json')
    .then(function (res) {
        $scope.skills = res.data;
    });
});

App.controller('repoController', function($scope, $http) {
    $http.get('data/repositories.json')
    .then(function(res) {
        $scope.repositories = res.data;
    });
});

App.controller('jobController', function($scope, $http) {
    $http.get('data/jobs.json')
    .then(function(res) {
        $scope.jobs = res.data;
    });
});

App.controller('awardController', function($scope, $http) {
    $http.get('data/awards.json')
    .then(function(res) {
        $scope.award = res.data;
    });
});