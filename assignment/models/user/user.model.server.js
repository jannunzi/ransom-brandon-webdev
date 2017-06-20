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
        createUser: createUser
        //TODO: findUser:findUser etc.



    };
    return api;

    function createUser(user){
        console.log("user.model.server.createUser()");
        console.log(user);
        User.create(user);

    }

};
