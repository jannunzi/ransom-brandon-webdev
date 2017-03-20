(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    function PageService(){

        var api = {
            "createPage": "createPage",
            "findPageByWebsiteId": "findPageByWebsiteId",
            "findPageById": "findPageById",
            "updatePage": "updatePage",
            "deletePage": "deletePage"

        };

        return api;

        function createPage(websiteId, name, desc){
            var newPage = {
                _id: (new Date()).getTime() + "",
                name: name,
                description: desc,
                websiteId: websiteId
            }
            pages.push(newPage);
            return newPage;

        }

        function findPageByWebsiteId(wid){
            var result = [];
            for(var i in pages){
                if(pages[i].websiteId === wid){
                    result.push(pages[i])
                }
            }

        }

        function findPageById(pid){
            var result = [];
            for(var i in pages){
                if(pages[i]._id === pid){
                    result.push(pages[i])
                }
            }

        }

        function updatePage(pid, page){
            for (var i in pages){
                if(pages[i].websiteId === pid){
                    pages[i].description = page.description;
                    pages[i].name = page.name;
                    return true;
                }
            }
            return false;

        }

        function deletePage(pid){
            for(var i in pages){
                if(pages[i]._id === pid){
                    pages.splice(i,1);
                    return true;
                }
            }
            return false;
        }



    }
})();

