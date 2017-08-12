/**
 * Created by Bransom on 7/1/17.
 */

module.exports = function(app){
    var mongoose = require("mongoose");
    var TodoSchema = mongoose.Schema({
        priority: Number,
        title: String,
        todo: String
    });
    var Todo = mongoose.model("Todo", TodoSchema);

    app.get("/api/todos", findAllTodos);
    app.put("/api/todos", reorderTodos);

    function reorderTodos(req, res){
        var start = req.query.start;
        var end = req.query.end;
        console.log([start, end]);
        res.send('200');
    }


    function findAllTodos(req, res){
        Todo
            .find()
            .then(function(todos){
                res.json(todos);
            });
    }

   /* Todo.create({"priority": 1, "title": "CS5610", "todo": "Teach Angular Directives"});
    Todo.create({"priority": 2, "title": "CS5200", "todo": "Data Modeling"});
    Todo.create({"priority": 3, "title": "CS1500", "todo": "Algorithms and Data Structures"});
    Todo.create({"priority": 4, "title": "CS1500", "todo": "Algorithms and Data Structures"});
    Todo.create({"priority": 5, "title": "CS1500", "todo": "Algorithms and Data Structures"});
    Todo.create({"priority": 6, "title": "CS1500", "todo": "Algorithms and Data Structures"});
    Todo.create({"priority": 7, "title": "CS1500", "todo": "Algorithms and Data Structures"});
    Todo.create({"priority": 8, "title": "CS1500", "todo": "Algorithms and Data Structures"});
    Todo.create({"priority": 9, "title": "CS1500", "todo": "Algorithms and Data Structures"});*/
};