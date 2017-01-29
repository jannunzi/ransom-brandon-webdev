(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService){
        var vm = this;
        vm.login = login;

        function init() {

        }
        init();

        function login(username, password) {
            var user = UserService.findUserByCredentials(username, password);
            console.log(user);
            if(user) {
                $location.url("/user/" + user._id);
            } else {
                vm.error = "User not found";

            }
        }
    }

})();