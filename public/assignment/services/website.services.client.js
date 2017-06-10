(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);


        function WebsiteService($http){

        var api = {
            "createWebsite": createWebsite,
            "findAllWebsitesForUser": findAllWebsitesForUser,
            "deleteWebsite": deleteWebsite,
            "updateWebsite": updateWebsite,
            "findWebsiteById": findWebsiteById
        };

        return api;

            function createWebsite(developerId, name, desc){
                var website = {
                    _id: (new Date()).getTime() + "",
                    name: name,
                    description: desc,
                    developerId: developerId
                };
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



        function findAllWebsitesForUser(uid){
            var url = "/api/user/"+uid+"/website";
            return $http.get(url);

            // var result = [];
            // for(var i in websites){
            //     if(websites[i]._id === uid){
            //         result.push(websites[i]);
            //     }
            // }
            // return result;
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
