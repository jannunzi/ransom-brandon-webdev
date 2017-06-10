(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, $location, WebsiteService){
        var vm = this;
        vm.uid = $routeParams.uid;

        function init(){

            WebsiteService

                .findAllWebsitesForUser(vm.uid)
                .success(function(websites){
                    vm.websites = websites;
            });
                // .findAllWebsitesForUser(vm.uid)
                // .then(function(response){
                //     console.log(response);
                //     var website = response.data;
                //     if(website._id){
                //         $location.url("/user/"+vm.uid+"/website");
                //     }
                // });
            //I might need to use developerId rather than website.id.

        }
        init();


    }

})();