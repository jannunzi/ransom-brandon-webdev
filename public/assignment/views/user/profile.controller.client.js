(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.unregister= unregister;
        var uid = $routeParams.uid;

        function init() {
            UserService
                .findUserById(uid)
                .then(function(response){
                   vm.user = response.data;
                   console.log(response);
                });
        }
        init();


        function unregister(){
            UserService
                .deleteUser(uid)
                .then(
                    function(){
                        $location.url("/login");

                },
                    function(){
                        vm.error = "Unable to remove user";
                    }
                )
        }

        function updateUser(newUser){
            UserService
                .updateUser(uid, newUser)
                .then(
                    function(response){
                        vm.success ="Updated successfully"
                        console.log(response);

                },
                    function(error){
                        vm.error= "failed to update"

                })

        }


    }

})();