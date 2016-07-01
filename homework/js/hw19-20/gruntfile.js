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
  },

  clean: {
    folder: ['.sass-cache']
  },

  watch: {
    scripts:{
      files: ['src/styles/*', 'src/css/*', 'src/js/*', 'src/index.html',],
      tasks: ['sass', 'concat', 'cssmin', 'uglify', 'processhtml', 'htmlmin', 'clean']
      
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');



  grunt.registerTask('default', [ 'sass', 'concat', 'cssmin', 'uglify', 'copy', 'processhtml', 'htmlmin', 'clean']);
}