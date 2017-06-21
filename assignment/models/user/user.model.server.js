/**
 * Created by Bransom on 6/16/17.
 */

module.exports = function(){

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();

    //entity manager.  This allows us to create an instance of a user.
    var User = mongoose.model("User", UserSchema);

    var api = {
        //Use CRUD operation to guide this process. No business logic should live here.
        createUser: createUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        deleteUser: deleteUser,
        updateUser: updateUser
        //TODO: findUserByUsername:findUser etc.

    };
    return api;

    function updateUser(userId, user){
        delete user._id;
        return User.update({_id: userId},
            {$set: {
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
    }

    function deleteUser(userId){
        return User.remove({_id: userId});

    }

    function findUserByCredentials(username, password){
        //find one finds a single thing
        return User.findOne(({username: username, password: password}))
    }

    function findUserById(userId){
        //Use findById as a common call for finding UserId's
        return User.findById(userId)
    }

    function createUser(user){
        console.log("user.model.server.createUser()");
        console.log(user);
        return User.create(user);

    }

};
