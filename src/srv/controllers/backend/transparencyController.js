'use strict';

var controller = module.exports = require('../Controller.js')();

controller.registerRoutes = function (app) {
    app.get('/about', controller.to('http://bevacqua.io/about'));
    app.get('/code', controller.to('https://github.com/bevacqua'));
    app.get('/source', controller.to('https://github.com/bevacqua/ponybar'));
};

controller.to = function (url) {
    return function (req, res) {
        res.redirect(url);
    };
};
