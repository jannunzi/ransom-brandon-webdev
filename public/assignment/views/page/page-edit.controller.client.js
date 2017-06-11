(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

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