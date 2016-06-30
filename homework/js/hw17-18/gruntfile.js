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
        src: ['img/**'], 
        dest: 'build/'
      }

    },

    processhtml: {
      dist: {
      files: {
        'build/index.html': ['src/index.html']
      }
    }
    },

    htmlmin: {
      dist: { 
        options: {                             
          removeComments: true,
          collapseWhitespace: true
        },      
        files: {
          'build/index.html': 'build/index.html',     
        }
      }
    }

});

 
  grunt.loadNpmTasks('grunt-contrib-concat'); // конкатенирует CSS|JS файлы
  grunt.loadNpmTasks('grunt-contrib-cssmin');  // минифицирует сконкатенированный CSS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // минифицирует JS файл
  grunt.loadNpmTasks('grunt-contrib-copy'); // копирует папку img
  grunt.loadNpmTasks('grunt-processhtml');  // редактирует html
  grunt.loadNpmTasks('grunt-contrib-htmlmin') // минифицирует html



  grunt.registerTask('default', [ 'concat', 'cssmin', 'uglify', 'copy', 'processhtml', 'htmlmin']);

};
