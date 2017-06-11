(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);


    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        vm.createPage = createPage;

        function init(){
            vm.userId = userId;
            vm.websiteId = websiteId;
            PageService
                .findPageByWebsiteId(websiteId)
                .success(function(pages){
                    vm.pages = pages;
                });
        }
        init();

        function createPage(newPage){
            PageService
                .createPage(vm.websiteId, newPage)
                .success(function(){
                    console.log(websiteId);
                    console.log(vm.websiteId);
                    $location.url("/user/"+ userId +"/website/"+ websiteId +"/page")
                });

        }

    }

})();