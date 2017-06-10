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

            function createWebsite(developerId, name, desc){
              /*  var website = {
                    _id: (new Date()).getTime() + "",
                    name: name,
                    description: desc,
                    developerId: developerId
                };*/
                return $http.post("/api/user/:userId/website", website);
            }

        function deleteWebsite(wid){
            for (var i in websites){
                if (websites[i]._id === wid){
                    websites.splice(i, 1);
                    return true;
                }
            }
            return false;
        }



        function findWebsitesByUser(userId){
            return $http.get("/api/user/"+ userId + "/website");

        }

            function findWebsiteById(wid){
                var url = ""
            }

        function updateWebsite(wid, website){
            for (var i in websites){
                if(websites[i].developerId === wid){
                    websites[i].description = website.description;
                    websites[i].name = website.name;
                    return true;
                }

            }
            return false;
        }

    }
})();
