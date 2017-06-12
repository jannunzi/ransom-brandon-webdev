(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService){
        var vm = this;

        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pageId = $routeParams.pid;

        vm.getSafeHtml= getSafeHtml;
        vm.getSafeUrl= getSafeUrl;

        function init(){

            vm.userId = userId;
            vm.websiteId = websiteId;
            vm.pageId= pageId;

            WidgetService
                .findWidgetByPageId(pageId)
                .success(function(widgets){
                    vm.widgets= widgets;
            });

            //Uses jQuery to make the widgets sortable.
            $(".container")
                .sortable();

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