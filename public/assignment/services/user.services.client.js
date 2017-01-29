(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];




        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser

        };
        return api;

        function createUser(newUser) {
            var newUser ={
                _id: (new Date()).getTime()
            };
            users.push(newUser)
        }

        function findUserById(id){
            for(var i in users){
                if(users[i]._id === id){
                    return users[i];
                }
            }
            return null;
        }

        function findUserByUsername(username){
            if(users[i].username === username){
                return users[i];
            }

        }

        function findUserByCredentials(username, password){
            for(var i in users) {
                if(users[i].username === username && users[i].password === password){
                    return users[i];
                }
                else {
                    error = "User not found";
                }
            }
            return null;
        }

        function updateUser(id, newUser){
            for(var i in users){
                if(users[i]._id === id){
                    users[i].firstName = newUser.firstName;
                    users[i].lastName = newUser.lastName;
                    return true;
                }
            }
            return false;

        }

        function deleteUser(userId){

            for (var i in users){
                if(users[i]._id === _id) {
                    users=users.splice(i, 1);
                    break;
                }
            }

        }

  //      function cUser(hggg,username,password,firtname,lastname){
  //          users.push({_id:hggg, username: username,    password: password,    firstName: firtname,  lastName: lastname  });
  //      }

    }

})();