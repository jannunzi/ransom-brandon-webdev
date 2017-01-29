(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;


        console.log('profile controller');

        var uid = $routeParams.uid;

        console.log(uid);

        function init() {
            var user = UserService.findUserById(uid);
            vm.user = user;
        }

        function updateUser(newUser){
            UserService.updateUser(id, newUser);
            console.log(newUser);
            users[i].firstName = newUser.firstName;
            users[i].lastName = newUser.lastName;
        }
        init();
    }

})();