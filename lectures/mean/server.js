/**
 * Created by Bransom on 6/19/17.
 */
var express = require('express');
var app = express();
//Add bodyParser to parse json.  Multer Parses multiform data.
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhiteBoardDB');

app.use(express.static(__dirname + '/public'));

//Create a new database Schema using Mongoose.

var CourseSchema = new mongoose.Schema({
    title: String,
    seats: {type:Number, default: 25},
    start:{type: Date, default: Date.now}
},{collection: "course"});


//Use Course as the API to access the underlying Collection above (CourseSchema)
var Course = mongoose.model("Course", CourseSchema);

app.get("/rest/course", function(req, res){
    Course.find(function(err, data){
        res.json(data);
    });

//Connects to a new URL Location and finds courses by ID
app.get("/rest/course:id", function(req, res){
    Course.find({_id: req.params.id}, function(err,data){
        res.json(data);
    });
})

});

app.delete("/rest/course/:id", function(req, res){
   Course.remove({_id: req.params.id}, function(err,result){
       Course.find(function(err, data){
           res.json(data);
       });
   }) ;
});

app.post("/rest/course", function(req, res){
    var course = req.body;
    Course.create(course, function(err, data){
        Course.find(function(err, data){
            res.json(data);
        });
    });
});

app.put("/rest/course/:id", function(req, res){
    var course = req.body;
    Course.findOneAndUpdate({_id: req.params.id}, {title: course.title, seats: course.seats, start: course.start}, function(err, data){
        Course.find(function(err, data){
            res.json(data);
        });
    });

    /*Course.update({_id: req.params.id}, {title: course.title, seats: course.seats, start: course.start}, function(err, data){
        Course.find(function(err, data){
            res.json(data);
        });
    });*/

});
app.listen(3000);