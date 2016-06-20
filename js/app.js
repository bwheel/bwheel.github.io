var App = angular.module('App', [])
App.controller('DemoCtrl', function($scope, $http) {
    $http.get('data.json')
    .then(function(res) {
        $scope.modules = res.data;
    });

});