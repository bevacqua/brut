'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var util = require('util');
var viewBase = 'bin/views';
var Controller = require('./Controller.js');

function ViewController(name){
    Controller.apply(this, arguments);

    this.name = name;
}

util.inherits(ViewController, Controller);

ViewController.prototype.renderView = function(req, res, view){
    var controller = this;
    var file = path.join(viewBase, this.name, view);

    controller.file(req, res, file, 'text/html');
};

ViewController.prototype.view = function(view){
    var controller = this;

    return function (req, res) {
        controller.renderView(req, res, view + '.html');
    };
};

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(ViewController, [null].concat(args)))();
};
