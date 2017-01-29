(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);

    function WebsiteListController($routeParams, WebsiteService){
        var vm = this;
        var userId = $routeParams.userId;

        vm.website = WebsiteService.findWebsitesForUser(userId);
    }

    function NewWebsiteController(){

    }

    function EditWebsiteController(){

    }

})();
