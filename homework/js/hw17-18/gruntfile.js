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
            'build/js/script.main.js':   ['src/js/*.js']
          }
        },
        extras: {
          files: {
            'build/css/style.main.css':  ['src/css/*.css'],
          }
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src:  'build/css/style.main.css',
          dest: '',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      build: {
        src: ['build/js/script.main.js'],
        dest: 'build/js/script.min.js'
      }
    },



    copy: {
      files: {
        expand: true, 
        cwd: 'src/',
        src: ['index.html', 'img/**'], 
        dest: 'build/'
      }

    },

    processhtml: {
      dist: {
      files: {
        'build/index.html': ['src/index.html']
      }
    }
    }

});

 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');



  grunt.registerTask('default', [ 'concat', 'cssmin', 'uglify', 'copy', 'processhtml']);

};
