(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);


        function WebsiteService($http){

        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "deleteWebsite": deleteWebsite,
            "updateWebsite": updateWebsite,
            "findWebsiteById": findWebsiteById
        };

        return api;

            function createWebsite(userId, website){
                return $http.post("/api/user/" + userId +"/website", website);
              /*  var website = {
                    _id: (new Date()).getTime() + "",
                    name: name,
                    description: desc,
                    developerId: developerId
                };*/

            }

        function deleteWebsite(websiteId){
            return $http.delete("/api/website/"+ websiteId);
            /*for (var i in websites){
                if (websites[i]._id === wid){
                    websites.splice(i, 1);
                    return true;
                }
            }
            return false;*/
        }



        function findWebsitesByUser(userId){
            return $http.get("/api/user/"+ userId + "/website");

        }

        function findWebsiteById(websiteId){
            return $http.get("/api/website/"+ websiteId);
        }

        function updateWebsite(websiteId, website){
            return $http.put("/api/website/"+ websiteId, website);
            /*for (var i in websites){
                if(websites[i].developerId === wid){
                    websites[i].description = website.description;
                    websites[i].name = website.name;
                    return true;
                }

            }
            return false;*/
        }

    }
})();
