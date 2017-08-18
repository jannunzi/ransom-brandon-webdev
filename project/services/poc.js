module.exports = function (app) {

    app.get("/api/project/search/:text", searchService);

    var unirest = require('unirest');
    var q  = require('q');

    function searchService(req, res) {
        var text = req.params.text;
        search(text)
            .then(function (result) {
                res.json(result);
            });
    }

    function search(text) {
        var deferred = q.defer();
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?metaInformation=false&number=10&query="+text)
            .header("X-Mashape-Key", "81ysayIluLmshurTPNMP5X6LYjzrp1CZh0vjsnnca6wRk2FrhD")
            .header("Accept", "application/json")
            .end(function (result) {
                deferred.resolve(result.body);
                // console.log(result.status, result.headers, result.body);
                console.log(result.body);
            });
        return deferred.promise;
    }

};
