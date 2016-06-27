module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	sass: {
		dist: {
			files: {
				'build/css/main.css':'src/styles/styles.scss',
				'build/css/hover.css': 'src/styles/imagehover.scss'
			}	
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
	
	watch: {
		files: ['src/styles/styles.scss','src/img/**', 'src/fonts/**', 'src/index.html'],
		tasks: ['sass', 'copy']

	}
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass', 'copy', 'watch']);

}