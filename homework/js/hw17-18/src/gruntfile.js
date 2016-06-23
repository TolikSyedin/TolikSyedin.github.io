module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
        basic: {
          options: {
            separator: ';'
          },
          files: {
            '../build/js/script.main.js':   ['js/*.js']
          }
        },
        extras: {
          files: {
            '../build/css/style.main.css':  ['css/*.css'],
          }
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src:  '../build/css/style.main.css',
          dest: '',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      build: {
        src: ['../build/js/script.main.js'],
        dest: '../build/js/script.min.js'
      }
    },

    copy: {
      files: {
        expand: true, 
        src: ['img/**', 'index.html',], 
        dest: '../build/'
      }

    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['js/*.js', 'css/*.css'],
        tasks: ['newer:concat', 'cssmin', 'uglify']
      }

    }
});

 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');



  grunt.registerTask('default', [ 'concat', 'cssmin', 'uglify', 'copy', 'watch']);
  grunt.registerTask('process', ['newer']);

};