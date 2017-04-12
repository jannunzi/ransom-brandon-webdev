(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($sce, $routeParams, WidgetService){
        var vm = this;
        vm.widgetId = $routeParams.widgetId;
        vm.uid = $routeParams.uid;

        function init(){

            WidgetService
                .findWidgetById(vm.widgetId)
                .then(
                    function(response){
                        vm.widget = response.data;
                    }
                )

        }
        init();


    }

})();