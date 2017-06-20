/**
 * Created by Bransom on 6/16/17.
 */
module.exports = function(){
   //connect to the mongoose library
    var mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/cs5610summer1');

    //We are going to create one service per collection (User, Website, Page, Widget)

    var models = {
        userModel: require("./user/user.model.server.js")()
        //TODO: add all the other models: Website Model, Page Model Etc.

    };
    return models;

    };