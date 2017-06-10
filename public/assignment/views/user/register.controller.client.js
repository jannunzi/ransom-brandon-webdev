(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $routeParams, UserService) {
        var vm = this;
        var uid = $routeParams.uid;
        vm.register = register;

        function register(username, password) {
            UserService
                .createUser(username, password)
                .then(function(response){
                    var user = response.data;
                    if(user){
                        $location.url("/profile"+user._id);
                    }
                });

        }



    }

})();