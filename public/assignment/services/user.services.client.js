(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser

        };
        return api;

        function createUser(username, password){
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
        }


        function findUserById(id){
            var url = "/api/user/" + id;
            return $http.get(url);

        }

        function findUserByUsername(username){
            if(users[i].username === username){
                return users[i];
            }

        }

        function findUserByCredentials(username, password){

            //Refactored this section to include url instead of data logic
            var url ="/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function updateUser(uid, newUser){

            var url = "/api/user/"+ uid;
            return $http.put(url, newUser);



        }

        function deleteUser(id){
            var url = "/api/user/"+ id;
            return $http.delete(url);

            // for (var i in users){
            //     if(users[i]._id === id) {
            //         users.splice(i, 1);
            //         break;
            //     }
            // }

        }


    }

})();