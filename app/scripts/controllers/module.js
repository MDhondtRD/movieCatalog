'use strict';

(function() {
    
    angular.module("movieCatalog.controllers", ["movieCatalog.config","ngRoute"])
    .config(function(apiUrl, $routeProvider) {
        
        $routeProvider.when("/", {
            templateUrl: "views/home.html",
            controller: "homeCtrl"
        });
        
        $routeProvider.when("/movie", {
            templateUrl: "views/movie.html",
            controller: "movieCtrl"
        });
        
        $routeProvider.otherwise( {
            redirectTo: "/" 
        });
                
    });
    
})(); 