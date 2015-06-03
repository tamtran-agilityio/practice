/*global module:false*/
var LIVERELOAD_PORT = 35711;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
          options: {
            port: 9000
          },
          server: {
            options: {
              port: 8080,
              hostname: '0.0.0.0'
            }
          },
          livereload: {
            options: {
              middleware: function (connect) {
                return [ lrSnippet, mountFolder(connect, '../javascript') ];
              }
            }
          }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "../javascript/todo-list/styles/main.css": "../javascript/todo-list/styles/main.scss"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['../javascript/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        },

        jshint: {
            all: ['../javascript/todo-list/script/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['connect:livereload','sass', 'jshint:all', 'watch']);
};
