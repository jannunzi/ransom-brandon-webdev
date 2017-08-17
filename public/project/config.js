/**
 * Created by Bransom on 8/15/17.
 */
(function() {
    var wer = angular
        .module("OryxHealth")
        .config(configuration)

    console.log(wer);
    //     .controller("profileController", profileController);
    //
    // function profileController($http) {
    //     $http.get("http://localhost:3000/api/project/search/meat")
    //         .success(function (result) {
    //             console.log(result);
    //         });
    // }

    function configuration($routeProvider) {
        $routeProvider
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