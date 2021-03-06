module.exports = function(app, models){

    var websiteModel = models.websiteModel;

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findWebsitesByUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
    ];


    function createWebsite(req, res){
        var userId = req.params.userId;
        var website = req.body;
        websiteModel
            .createWebsite(userId, website)
            .then(
                function(website){
                    res.json(website)
                }
            );
        /*newWebsite._id = (new Date()).getTime();
        newWebsite.developerId = userId;
        websites.push(newWebsite);
        res.json(newWebsite);*/
    }

    //This function never places the Website list within the resulting array.  I need to find a way to do this.

    function findWebsitesByUser(req, res){
        var userId = req.params.userId;
        websiteModel
            .findWebsitesByUser(userId)
            .then(
                function(websites){
                    res.json(websites);
                }
            );

        /*var sites = [];
        for(var w in websites){
            if(websites[w].developerId == userId){
                sites.push(websites[w]);
            }
        }
        res.json(sites);*/

    }
    function findWebsiteById(req, res){
        var websiteId = req.params.websiteId;
        for(var w in websites){
            var website = websites[w];
            if (website.id === websiteId){
                res.send(website);
                return;
            }
        }
    }

    function updateWebsite(req, res){
        var websiteId = req.params.websiteId;
        var website = req.body;
        for(var w in websites){
            if(websites[w]._id == websiteId){
                websites[w].name = website.name;
                websites[w].description = website.description;
                res.json(website[w]);
                return;
            }

        }

    }
    function deleteWebsite(req, res){
        var websiteId = req.params.websiteId;
        for(var w in websites){
            if(websites[w]._id == websiteId)
            {
                websites.splice(w, 1);
                res.json(w);
                return;
            }
        }

    }

};