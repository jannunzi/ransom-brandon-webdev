/**
 * Created by Bransom on 8/15/17.
 */
(function() {
    var wer = angular
        .module("OryxHealth")
        .config(configuration)

    function configuration($routeProvider) {
        $routeProvider
            .when("/poc", {
                templateUrl: "poc/templates/poc.html",
                controller: "pocController",
                controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "users/client/views/templates/profile/Profile.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/home", {
                templateUrl: "login/views/home.html"
            })
            .when("/login", {
                templateUrl: "login/views/login.html"
            })
            .otherwise({
                redirectTo: '/profile'
            });
    }
})();