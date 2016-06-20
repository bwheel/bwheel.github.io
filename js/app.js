var app = angular.module('demo', []).controller('DemoCtrl', function($scope, $http) {
    $http.get('data.json')
    .then(function(res){
        $scope.modules = res.data;
    })
    

});