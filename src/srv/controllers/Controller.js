'use strict';

var _ = require('lodash');
var fs = require('fs');

function Controller(){
}

Controller.prototype.pipe = function (req, res, file, mime) {
    res.set('Content-Type', mime);

    var readStream = fs.createReadStream(file);

    readStream.on('error', function () {
        logger.warn('Attempt to serve a file which doesn\'t exist.', {
            file: file,
            mime: mime,
            url: req.originalUrl
        });
    });

    readStream.on('open', function () {
        readStream.pipe(res);
    });
};

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(Controller, [null].concat(args)))();
};
