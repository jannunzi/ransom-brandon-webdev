/**
 * Created by Bransom on 6/20/17.
 */
module.exports = function(){
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server.js")();
    var Website = mongoose.model("Website", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findWebsitesByUser: findWebsitesByUser
    };
    return api;

    function createWebsite(userId, website){
        website._user = userId;
        return Website.create(website);
    }

    function findWebsitesByUser(userId){
        return Website.find({"_user": userId});
    }
};