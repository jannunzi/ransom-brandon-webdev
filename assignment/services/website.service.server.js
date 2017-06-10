module.exports = function(app){

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
    ];

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req,res){
        var website = req.body;
        console.log(website);
        users.push(website);
        res.send(website);
    }

    //This function never places the Website list within the resulting array.  I need to find a way to do this.

    function findAllWebsitesForUser(req,res){
        var uid = req.params.uid;
        var result = [];
        for(var w in websites){
            if(websites[w].developerId === uid){
                result.push(websites[w]);
            }
        }
        res.json(result)

    }
    function findWebsiteById(req,res){

    }
    function updateWebsite(req,res){

    }
    function deleteWebsite(req,res){

    }

};