module.exports = function(app, models){

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];


    app.post("/api/user", createUser);
    app.get("/api/user", getUsers);

    // Express cannot differentiate between /api/user & /api/user?username=:username
    // app.get("/api/user?username=:username", findUserByUsername);
    app.get("/api/user/:uid", findUserById);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);

    function deleteUser (req,res){
        var uid = req.params.uid;

        models.userModel
            .deleteUser(uid)
            .then(
            function(stats){
                console.log(stats);
                res.sendStatus(200);
            },
            function(err){
                res.sendStatus(err)
            }
        )
        /*for(var i in users){
            if (users[i]._id === uid){
                users.splice(i, 1);
                res.send(users[i]);
                return;
            }
        }
        res.sendStatus(400)*/
    }

    function updateUser(req, res){
        var uid = req.params.uid;
        var newUser = req.body;

        models.userModel
            .updateUser(uid, newUser)
            .then(
                function(stats){
                    console.log(stats);
                    //use res.sendStatus(200), because res.send(200) has been deprecated.
                    res.sendStatus(200);
                },
                function(error){
                    res.StatusCode(400).send(error);

                }
            )
        /*for(var i in users){
            if(users[i]._id === uid){
                users[i].firstName = newUser.firstName;
                users[i].lastName = newUser.lastName;
                res.send(users[i]);
                return;
            }
        }*/
    }

    function createUser(req, res){
        var user = req.body;
        //Use a promise to make an asynchronous call to the database.
        //Same syntax as the controller


        models.userModel
            .createUser(user)
            .then(
                function(user){
                    console.log(user);
                    res.json(user);
                },
                function(error){
                    res.StatusCode(400).send(error);

                });
        // console.log(user);
        // users.push(user);
        // res.send(user);
    }

    // path parameters are in params and query parameters are in query.

    function findUserById(req,res){
        var id = req.params.userId;

        models.userModel
            .findUserById(id)
            .then(
                function(user){
                    res.json(user);
                },
                function(err){
                    res.send(err)
                });
        /*for(var i in users){
            if(users[i]._id === id){
                res.send(users[i]);
                return;
            }
        }
        res.sendStatus(400);*/
    }

    function getUsers(req, res){
        var username = req.query['username'];
        var password = req.query['password'];
        console.log(username);
        console.log(password);
        if(username && password){
            findUserByCredentials(username, password, res);
        }
        else if(username){
            findUserByUsername(username, res);
        }
        else{
            res.send(users);
        }

    }

    function findUserByCredentials (req, res){
        var username = req.query['username'];
        var password = req.query['password'];

        models.userModel
            .findUserByCredentials (username, password)
            .then(
                function(user){
                    res.json(user);
                },
                function(err){
                    res.send(err);
                });
        /*for(var i in users){
            if(users[i].username === username && users[i].password === password){
                res.send(users[i]);
                return;
            }
        }
        res.sendStatus(400);*/

    }

    function findUserByUsername(username, res){
        for(var i in users){
            if(users[i].username === username){
                res.send(users[i]);
                return;
            }
        }
        res.sendStatus(400);

    }




};