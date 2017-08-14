/**
 * Created by Bransom on 6/16/17.
 */

module.exports = function(){
    var models = null;
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();

    //entity manager.  This allows us to create an instance of a user.
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        //Use CRUD operation to guide this process. No business logic should live here.
        "createUser": createUser,
        "findUserById": findUserById,
        "findUserByCredentials": findUserByCredentials,
        "deleteUser": deleteUser,
        "updateUser": updateUser

        //TODO -- Add findUserByUsername

    };
    return api;

    function updateUser(userId, user){
        delete user._id;
        return UserModel.update({_id: userId},
            {$set: {
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
    }

    function deleteUser(userId){
        return UserModel.remove({_id: userId});

    }

    function findUserByCredentials(username, password){
        //find one finds a single thing
        return UserModel.findOne(({username: username, password: password}))
    }

    function findUserById(userId){
        //Use findById as a common call for finding UserId's
        return UserModel.findById(userId)
    }

    function createUser(user){
        delete user._id;
        return UserModel.create(user);

    }

};
