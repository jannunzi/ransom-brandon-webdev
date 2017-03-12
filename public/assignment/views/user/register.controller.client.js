(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, UserService) {
        var vm = this;
        var uid = $routeParams.uid;

        function init() {
            var user = UserService.createUser(newUser);
            vm.user = user;
        }
        init();


    }

})();