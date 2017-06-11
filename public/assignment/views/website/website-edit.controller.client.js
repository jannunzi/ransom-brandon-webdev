(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, $routeParams, WebsiteService){
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;

        function init(){
            vm.userId = userId;
            vm.websiteId = websiteId;

            WebsiteService
                .findWebsitesByUser(userId)
                .success(function(websites){
                    vm.websites = websites;
                });

            WebsiteService
                .findWebsiteById(websiteId)
                .success(function(updatedWebsite){
                    vm.updatedWebsite = updatedWebsite;
                });
        }
        init();

        function updateWebsite(){
            WebsiteService
                .updateWebsite(websiteId, vm.updatedWebsite)
                .success(function(website){
                    if(website != null){
                        $location.url("/user/"+ userId + "/website");
                    }
                })
                .error(function(){
                    vm.error = "Error in updating the website";
                });
        }

        function deleteWebsite(websiteId){
            WebsiteService
                .deleteWebsite(vm.websiteId)
                .success(function(){
                    $location.url("/user/" + userId + "/website")
                });

        }

    }

})();