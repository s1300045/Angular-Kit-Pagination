'use strict';
module.exports = function (grunt) {
	grunt.config.set('watch', {
         options: {
             dateFormat: function(time) {
                 grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
                 grunt.log.writeln('Waiting for more changes...');
             },
             interval: 1000,
        },
        'develop': {
            files: [
                'index.js',
                'grunt/**', 
                'Gruntfile.js', 
                'src/**/*.tpl.pug',
                'src/**/*.js', 
                'src/**/*.scss', 
                'example/index.js',
                'example/templates/*.pug', 
                'example/src/*.js', 
            ],
            tasks: [
                'clean:all', 
                'jshint', 
                'sass', 
                'webpack:develop',
            ],
        },
	});
    grunt.loadNpmTasks('grunt-contrib-watch');
};