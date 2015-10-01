'use strict';

(function () {
    
    function MovieCtrl($scope, $http, apiUrl) {
        
        $scope.search = function(input) {
            $http.get(apiUrl + "/Movies/search?title=" + input).success(function(data) {
                $scope.searchResults = data;
            });
        };
        
    }
    
    angular.module("movieCatalog.controllers")
    .controller("movieCtrl", MovieCtrl);
    
})();