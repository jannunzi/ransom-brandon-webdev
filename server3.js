/**
 * Created by Bransom on 6/12/17.
 */
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

var CourseSchema = new mongoose.Schema({
    title: String,
    seats: {type: Number, default: 25},
    starts: {type: Date, default: Date.now}
}, {collection: "course"});

//Gives the ability to interact with the database
var Course = mongoose.model("Course", CourseSchema);

function findByTitle(title, callback){

    Course.find({title: title}, callback);

}


{

    Course.create(Course, function (err, results) {
            console.log(err);
            console.log(results);

        });

}

function findAll(callback){
    Course.find(callback);
}

findAll(renderCourses);

function renderCourses(err, resultSet)
{
    for(var r in resultSet){
        var title = resultSet[r].title;
        var seats = resultSet[r].seats;
        console.log([title, seats]);
    }
}
//When data is exchanged put REST before the course resource.
app.get('/rest/course', function(req, res){
    findAll(function(err, results)
    {
        res.json(results);
    });
});

app.listen(3000);
