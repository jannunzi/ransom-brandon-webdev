(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location, $routeParams, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pageId = $routeParams.pid;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init(){
            vm.userId = userId;
            vm.websiteId = websiteId;
            vm.pageId = pageId;
            PageService
                .findPageByWebsiteId(websiteId)
                .success(function(pages){
                    vm.pages = pages;
                });

            PageService
                .findPageById(pageId)
                .success(function(editedPage){
                    vm.editedPage = editedPage;
                });
        }
        init();

        function updatePage(){
            PageService
                .updatePage(pageId, vm.editedPage)
                .success(function(page){
                    if(page != null){
                        $location.url("/user/"+ userId + "/website/" + websiteId + "/page")
                    }

                })

                .error(function(){
                    vm.error = "There has been an error in updating this page"
                });
        }

        function deletePage(pageId){
            PageService
                .deletePage(vm.pageId)
                .success(function(){
                   $location.url("/user/"+ userId + "/website/" + websiteId + "/page")
                });
        }

    }

})();