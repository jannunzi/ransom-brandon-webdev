module.exports = function(app){

    //retrieve models and pass them to services
    var models = require("./models/models.server")();

    //Load and call the function
    require("./services/user.service.server.js")(app, models);
    require("./services/website.service.server.js")(app, models);
    require("./services/page.service.server.js")(app);
    require("./services/widget.service.server.js")(app);

};