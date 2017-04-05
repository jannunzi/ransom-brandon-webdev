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
            var promise = UserService.findUserByCredentials(username, password);
            promise.then(function(response){
                console.log(response)

            });
        }
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

    function RegisterController() {

    }

})();