'use strict';

(function () {
    
    function HomeCtrl($scope, $http, apiUrl) {
        $http.get(apiUrl + "/Movies").success(function(data) {
            $scope.movies = data;
        });
        
        $scope.getHeight = function(index) {
            var max = 0;
            $scope.height = 0;
            var start = Math.floor(index / 3) * 3;
            for (var i = start; i < start + 3; i++) {
                if ($scope.movies[i].overview.length > max) {
                    max = $scope.movies[i].overview.length;
                }
            }
            $scope.height = max + 150;
        };
        
    }
    
    angular.module("movieCatalog.controllers")
    .controller("homeCtrl", HomeCtrl);
    
})();