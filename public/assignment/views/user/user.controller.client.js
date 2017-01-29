(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    function LoginController(UserService, $location){
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

            }
        }
    }
    function RegisterController() {

    }

    function ProfileController(UserService, $routeParams) {
        var vm = this;

        console.log('profile controller');

        var uid = $routeParams.uid;

        console.log(uid);

        function init() {
            var user = UserService.findUserById(uid);
            vm.user = user;
        }
        init();
    }

})();