(function(){
    
    var App = angular.module('MyApp', []);
    

    var MainController = function($scope, $http){
       
        // return a the error message.
        var onError = function(reason){
            $scope.error = reason;
        };

        var onLanguageComplete = function(response)
        {
            $scope.languages = [];
            for(var lang in response.data){
                $scope.languages.push(lang);
            };
        }

        // Save the repositories.
        var onRepoComplete = function(response){
            $scope.repos = response.data;
            $http.get(response.data.languages_url)
            .then(onLanguageComplete, onError);
        };

        // Save the User information.
        var onUserComplete = function(response){
            $scope.user = response.data;
            $http.get(response.data.repos_url)
            .then(onRepoComplete, onError);
        };

        // GET the User and Repo information from GitHub.
        $http.get("https://api.github.com/users/bwheel")
        .then(onUserComplete, onError);


    };

    //Apply the controller to Angular JS
    App.controller('mainController', MainController);


}());