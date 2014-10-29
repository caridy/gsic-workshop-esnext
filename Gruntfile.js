'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        esnext: {
            options: {
                sourceMap: true
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-esnext');
    grunt.registerTask('default', ['esnext']);

};
