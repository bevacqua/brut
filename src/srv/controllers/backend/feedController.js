'use strict';

var controller = module.exports = require('../Controller.js')();
var feedService = require_cwd('src/svc/feedService.js');

controller.registerRoutes = function(app){
    app.get('/feed', controller.getFeed);
};

controller.getFeed = function(req, res){
    var file = feedService.getFilePath();
    controller.file(req, res, file, 'application/xml');
};
