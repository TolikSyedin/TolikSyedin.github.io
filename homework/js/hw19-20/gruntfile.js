module.exports = function(grunt){

grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),
	
	sass: {
		dist: {
			files: {
				'src/css/main.css':'src/styles/styles.scss',
			}	
		}
	},
	
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
			src: ['img/**/*', 'fonts/**/*', 'index.html'],
			dest: 'build/'
		}
	},

  clean: {
    folder: ['.sass-cache']
  }


});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');



  grunt.registerTask('default', [ 'sass', 'concat', 'cssmin', 'uglify', 'copy', 'clean']);
}