(function(){
    'use strict';
    
    var app = angular.module("quizApp", ["ngRoute"]);
    
    app.config(function ($routeProvider, $locationProvider) {
               $routeProvider
               .when("/login", {
                   templateUrl: "app/membership/templates/login.template.html",
                   controller: "accountController as vm"
               }).when("/quiz", {
                   templateUrl: "app/quiz/templates/questions.template.html",
                   controller: "questionController as vm"
               })
                .otherwise({redirectTo : "/login"})
               $locationProvider.html5Mode({ enabled: true });
    });

    app.controller("mainContrroler", mainController);
    function mianController($rootScope, $location) {
        var vm = this;
        vm.logout = logout;

        function logout(){
            $rootScope.isLoggedin = false;
            $location.path("/login");
        }
    }
    
})();
