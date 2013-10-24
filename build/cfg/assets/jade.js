'use strict';

var jadeContextService = require('../service/jadeContextService.js');

require('./util/initJadeContext.js');

module.exports = function(options){
    var o = typeof options === 'object';
    var src = o ? options.src : 'src/client/views';
    var dest = o ? options.dest : 'bin/views';
    var release = o ? options.release : release;

    return {
        expand: true,
        cwd: src,
        src: '**/*.jade',
        dest: dest,
        ext: '.html',
        options: {
            pretty: !release,
            basedir: src,
            data: o ? false : jadeContextService.getContext
        }
    };
};
