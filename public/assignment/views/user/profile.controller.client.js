(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        var uid = $routeParams.uid;

        function init() {
            UserService
                .findUserById(uid)
                .then(function(response){
                   vm.user = response.data;
                });
        }
        init();

        function updateUser(newUser){
            UserService
                .updateUser(uid, newUser)
                .then(
                    function(response){
                        vm.success ="Updated successfully"

                },
                    function(error){

                })
        }


    }

})();