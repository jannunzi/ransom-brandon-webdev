(function () {
    angular
        .module("OryxHealth")
        .service("spoonacularService", spoonacularService);
    
    function spoonacularService($http) {
        this.searchIngredients = searchIngredients;

        function searchIngredients(text) {
            return $http.get("/api/project/search/" + text);
        }
    }
})();