// widget.service.server.js

module.exports = function (app) {
    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/upload' });


    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findWidgetsByPageId);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    //6th widget post after all the required sending of information.
    app.post ("/api/upload", upload.single('myFile'), uploadImage);

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Having very messed-up things happen is a key ingredient in the recipe for the Alien film franchise. While audiences have come to expect gory explosions and the like, there’s a chance that this May’s Alien: Covenant might still hold the power to shock fans.</p>'},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];


    function findWidgetsByPageId(req, res){
        var results = [];
        var pageId = req.params.pageId;
        for(var w in widgets){
            if(widgets[w].pageId == pageId){
                results.push(widgets[w]);
            }
        }
        res.json(results);

    }

    function createWidget(req, res){
        var pageId = req.params.pageId;
        var widget = req.body;
        console.log(widget);
        widget.pageId = pageId;
        widget._id = (new Date()).getTime();
        widgets.push(widget);
        res.json(widget);

    }



    function findWidgetById(req, res){
        var widgetId = req.params.widgetId;
        for(var w in widgets){
            if (widgets[w]._id === widgetId){
                res.json(widgets[w]);
                return;
            }

        }
        res.status(404).send("Unable to find widget with id:" + widgetId);
    }

    function updateWidget(req, res){
        var widgetId = req.params.widgetId;
        var widget = req.body;
        for(var w in widgets){
            if(widgets[w]._id == widgetId){
                widgets[w] = widget;
                res.json(widgets[w]);
                return;
            }
        }

    }

    function deleteWidget(req, res){
        var widgetId = req.params.widgetId;
        for(var w in widgets){
            if(widgets[w]._id == widgetId){
                widgets.splice(w, 1);
                res.json(w);
                return;
            }
        }

    }





    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        // widget = getWidgetById(widgetId);
        // widget.url = '/uploads/'+filename;

        for(var i in widgets){
            if (widgets[i]._id === widgetId){
                widgets[i].url = "/upload/" + filename;
            }

        }

        res.redirect("/assignment/index.html#/user/456/website/456/page/321/widget/"+widgetId);

        // var callbackUrl   = "/assignment/#/user/"+userId+"/website/"+websiteId+...;
        //
        // res.redirect(callbackUrl);
    }
    // ...
};