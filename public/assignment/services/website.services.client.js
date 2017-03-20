(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
    ];

        function WebsiteService(){

        var api = {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            deleteWebsite: deleteWebsite,
            updateWebsite: updateWebsite,
            findWebsiteById: findWebsiteById


        };

        return api;

        function deleteWebsite(wid){
            for (var i in websites){
                if (websites[i]._id === wid){
                    websites.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        function createWebsite(developerId, name, desc){
            var newWebsite = {
                _id: (new Date()).getTime() + "",
                name: name,
                description: desc,
                developerId: developerId
            };
            websites.push(newWebsite);
            return newWebsite;
        }

        function findWebsitesByUser(uid){
            var result = [];
            for(var i in websites){
                if(websites[i]._id === uid){
                    result.push(websites[i]);
                }
            }
            return result;
        }

            function findWebsiteById(wid){
                var result = [];
                for(var i in websites){
                    if(websites[i].developerId === wid){
                        result.push(websites[i]);
                    }
                }
                return result;
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
