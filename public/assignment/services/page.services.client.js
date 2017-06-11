(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    /*var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];*/

    function PageService($http){

        var api = {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage

        };

        return api;

        function createPage(wid, page){
            return $http.post("/api/website/"+ wid + "/page", page)

        }

        function findPageByWebsiteId(wid){
            return $http.get("/api/website/"+ wid + "/page");
        }

        function findPageById(pageId){
            return $http.get("/api/page/"+ pageId);
        }


        function updatePage(pageId, page){
            return $http.put("/api/page/"+ pageId, page);

        }

        function deletePage(pageId){
            return $http.put("/api/page/"+ pageId, page);
        }



    }
})();

