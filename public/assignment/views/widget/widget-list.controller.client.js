(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService){
        var vm = this;
        var pid = $routeParams.pid;
        vm.uid = $routeParams.uid;
        vm.getSafeHtml= getSafeHtml;
        vm.getSafeUrl= getSafeUrl;

        function init(){

            vm.widgets = WidgetService.findWidgetsForPageId(pid);

        }
        init();

        function getSafeHtml(widget){
            return $sce.trustAsHtml(widget.text);

        }
        function getSafeUrl(widget){
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);

        }

    }

})();