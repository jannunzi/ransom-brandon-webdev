(function() {
    angular
        .module("WebAppMaker")

        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService){
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        function init(){
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
            console.log(vm.pages);
        }
        init();

    }

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.createPage = createPage;

        function createPage(name, title){
            var newPage = PageService.createPage(vm.uid, vm.wid, name, title);
            if(newPage){
                $location.url("/user/"+vm.uid+"website"+vm.wid+"/page")
            }
            else{
                vm.error = "Unable to create page";
            }
        }


    }

    function EditPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;
        vm.deletePage = deletePage;

        function deletePage(pid){
            var result = PageService.deletePage(pid);
            if(result){
                $location.url("/user/"+vm.uid+"website"+vm.wid+"/page")
            }
            else{
                vm.error = "Unable to create page";
            }
        }

    }

})();