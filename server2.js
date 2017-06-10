var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

app.use(express.static(__dirname + '/public2'));

var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var courses = [
    {title: "Java 101", seats: 23, start: new Date()},
    {title: "C# 101", seats: 34, start: new Date(2015,9,4)},
    {title: "Node.js 101", seats: 45, start: new Date(2016,1,15)}
];

app.post("/rest/course", function(req,res){
    var course = req.body;
    courses.push(course);
    res.json(courses);
});

app.put("/rest/course/:id", function(req,res){
    var index = req.params["id"];
    var course = req.body;
    courses[index].title = course.title;
    courses[index].seats = course.seats;
    courses[index].start = course.start;
    res.json(courses);

});

app.delete("/rest/course/:id", function(req,res){
    var index = req.params["id"];
    courses.splice(index, 1);
    res.json(courses);
});

app.get("/rest/course/:id", function(req,res){
    var index = req.params["id"];
    res.json(courses[index]);
});

//Use /rest/ to gather data rather than static content (Uses course rather than courses)
//This is the first of the CRUD operations (READ)
app.get("/rest/course", function(req, res){
    res.json(courses);
});

/*
// GET /style.css etc Configures server to host static content at public2
app.use(express.static(__dirname + '/public2'));

app.get('/', function(req, res){
    res.send('hello world');
});

//Sending Json through the address localhost:3000/getSomeJson
app.get('/getSomeJson', function(req, res){
    res.send({message: "Hello World"})

});

//Sends array through localhost:3000/getJsonArray
app.get('/getJsonArray', function(req, res) {
    var array = [{title: "Java"}, {title: "C#"}];
    res.send(array);
});
*/

app.listen(3000);