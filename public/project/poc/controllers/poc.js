(function () {
    angular
        .module("OryxHealth")
        .controller("pocController", pocController);
    
    function pocController(spoonacularService) {
        var model = this;
        model.searchIngredient = searchIngredient;
        function init() {

        }
        init();
        function searchIngredient(text) {
            spoonacularService
                .searchIngredients(text)
                .then(function (response) {
                    model.ingredients = response.data;
                });
        }
    }
})();