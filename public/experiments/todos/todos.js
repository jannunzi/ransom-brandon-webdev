/**
 * Created by Bransom on 6/22/17.
 */
(function(){
    angular.module("MyDirectives", [])
        .directive("todos", todos);

    function todos(){

        function linker(scope, element, attributes){
            var data = scope.data;
            var myScope = scope;
            var startIndex = -1;
            var endIndex = -1;
            $(element)
                .find("tbody")
                .sortable({
                    axis: 'y',
                    start: function(event,ui){
                        startIndex = ui.item.index();
                    },
                    stop: function(event,ui){
                        endIndex = ui.item.index();
                        console.log(myScope);
                        //myScope.callback({start: startIndex, end: endIndex});
                        var reorderedElement = myScope.data.splice(startIndex, 1)[0];
                        console.log(reorderedElement);
                        myScope.data.splice(endIndex, 0, reorderedElement);
                        //modifying something that something is happening to the greater Angular program (Should always be abstracted)
                        //myScope.$apply();


                    }

                });

        }
        return {
            templateUrl: "todos.html",
            scope: {
                data: "=",
                reorderTodos: "&",
                callback: "&"
            },
            link: linker
        }
    }

})();