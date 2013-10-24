'use strict';

var assets = require('../assets');

module.exports = {
    jshint: {
        client: assets.js.lint('src/client/js', ['src/client/js/**/*.js', '!src/client/js/vendor/**/*.js']),
        server: assets.js.lint('src/srv', ['src/srv', 'src/lib', 'app.js']),
        server_support: assets.js.lint('src/srv', ['Gruntfile.js', 'build', 'deploy'])
    },
    watch: {
        rebuild: { tasks: ['build:rebuild'], files: ['Gruntfile.js', 'build/**/*.js'] },
        jshint_client: { tasks: ['jshint:client'], files: ['src/client/js/**/*.js'] },
        jshint_server: { tasks: ['jshint:server'], files: ['src/srv/**/*.js', 'app.js'] },
        jshint_server_support: { tasks: ['jshint:server_support'], files: ['Gruntfile.js', 'build/**/*.js', 'deploy/**/*.js'] },
        images: { tasks: ['images:debug'], files: ['src/client/img/**/*.{png,jpg,gif,ico}'] },
        css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl', 'bin/.tmp/sprite/*.css', 'bower_components/**/*.css'] },
        js_sources: { tasks: ['copy:js_sources'], files: ['src/client/js/**/*.js'] },
        js_bower: { tasks: ['copy:js_bower_debug'], files: ['bower_components/**/*.js'] },
        views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] },
        livereload: { options: { livereload: true }, files: ['bin/public/**/*.{css,js}','bin/views/**/*.html'] }
    },
    nodemon: {
        dev: {
            options: {
                file: 'build/nodemon.js'
            }
        }
    },
    concurrent: {
        dev: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['watch', 'nodemon:dev']
        }
    },
    play: {
        success: { file: 'build/sound/success.mp3' }
    }
};
