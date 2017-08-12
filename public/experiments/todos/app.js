/**
 * Created by Bransom on 6/22/17.
 */
(function(){
    angular
        .module("TodoApp", ["MyDirectives"])
        .controller("TodosController", TodosController);

    function TodosController($http){

            var vm = this;
            vm.reorderTodos = reorderTodos;
            $http.get("/api/todos")
                .then(function(response){
                    vm.data = response.data;
                });


            function reorderTodos(start, end){
                console.log("TodosController");
                console.log(start);
                console.log(end);
                $http.put("/api/todos?start="+start+"&end="+end);
            }
    }


})();