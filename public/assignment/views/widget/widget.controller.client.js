(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController($routeParams, WebsiteService){
        var vm = this;
        var userId = $routeParams.userId;

        vm.website = WebsiteService.findWebsitesForUser(userId);
    }

    function NewWidgetController(){

    }

    function EditWidgetController(){

    }

})();