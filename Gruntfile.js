/*
 * admin-template
 * https://github.com/jiabin/admin-template
 *
 * Copyright (c) 2014 Eymen Gunay
 * Licensed under the Custom license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
      dist: ['dist']
    },

    // Less
    less: {
      main: {
        files: {
          "css/style.css": "src/less/style.less"
        }
      }
    },

    // Min
    min: {
      script: {
        files: {
          'js/github-repo-widget.min.js': ['src/js/github-repo-widget.js'],
          'js/jquery-ajax-localstorage-cache.min.js': ['src/js/jquery-ajax-localstorage-cache.js']
        }
      },
    },

    // Cssmin
    cssmin: {
      style: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      },
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          "index.html": ["src/index.jade"]
        }
      }
    },

    // Watch
    watch: {
      js: {
        files: ['src/js/**'],
        tasks: ['min:script']
      },
      less: {
        files: ['src/less/**'],
        tasks: ['less', 'cssmin:style']
      },
      jade: {
        files: ['src/*.jade'],
        tasks: ['jade']
      }
    },

    // Connect
    connect: {
      server: {
        options: {
          port: 1337,
          keepalive: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'less', 'min', 'cssmin', 'jade']);
};
