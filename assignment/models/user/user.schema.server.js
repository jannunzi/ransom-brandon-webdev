
module.exports = function(){
   var mongoose = require('mongoose');

   var UserSchema = mongoose.Schema({
       username: {type: String, required: true},
       password: String,
       firstName: String,
       lastName: String,
       dob: Date,
       email: String,
       phone: String,
       dateCreated: {type: Date, default: Date.now}
       //MongoDB will create an _id file for you.  (You can make another category as a primary key.
   }, {collection: "assignment.user"});

   //TODO: add an array of references to child website instances.

   // use assignment.user for the collection here and use project.user within your assignment

   return UserSchema;
   //Good practice is to have one schema per file.

};

