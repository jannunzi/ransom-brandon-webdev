(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, $routeParams, WebsiteService){
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.deleteWebsite = deleteWebsite;

        function deleteWebsite(wid){
            var result = WebsiteService.deleteWebsite(wid);
            if(result){
                $location.url("/user/"+vm.uid+"/website");

            }
            else{
                vm.error ="Unable to delete website";

            }

        }

    }

})();