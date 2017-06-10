module.exports = function(app){

    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/website/:websiteId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage (req,res){
        var page = req.body;
        console.log(page);
        users.push(page);
        res.send(page);

    }
    function findAllPagesForWebsite(req,res){
        var userId = req.params.userId;
        var result = [];
        for(var w in websites){
            if(websites[w].developerId === userId){
                result.push(websites[w]);
            }
        }
        res.json(result)

    }
    function findPageById(req,res){

    }
    function updatePage(req,res){

    }
    function deletePage(req,res){

    }

};