(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($location, $routeParams, WebsiteService){
        var vm = this;
        vm.createWebsite = createWebsite;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;

        function init(){
            vm.userId = userId;
            console.log(userId);
            vm.websiteId = websiteId;
            WebsiteService
                .findWebsitesByUser(userId)
                .success(function(websites){
                    vm.websites = websites;
                });

            WebsiteService
                .findWebsiteById(websiteId)
                .success(function(website){
                    vm.website = website;
                })
        }
        init();

        function createWebsite(newWebsite){
            WebsiteService
                .createWebsite(vm.userId, newWebsite)
                .success(function(){
                   $location.url("/user/"+ userId + "/website")
                });


        }

    }

})();