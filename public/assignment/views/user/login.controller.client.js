(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService){
        var vm = this;
        vm.login = login;

        function login(username, password) {
            // Can be in 2 different promise syntax.

            // var promise = UserService.findUserByCredentials(username, password);
            // promise.then(function(response)

            // Other Promise syntax that is typically used
            UserService
                .findUserByCredentials(username, password)
                .then(function(response){
                    console.log(response);
                    var user = response.data;
                    if(user._id) {
                        $location.url("/user/" + user._id);
                    } else {
                        vm.alert = "Unable to login";

                    }
            });
            // console.log(user);

        }
    }

})();