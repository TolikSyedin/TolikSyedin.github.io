module.exports = function(grunt){


require('load-grunt-tasks')(grunt);
 
grunt.initConfig({
  babel: {
    options: {
      sourceMap: true,
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: {
        'js/dist/converted.js': 'js/src/ES6.js'
      }
    }
  },
  watch: {
    files: ['js/src/ES6.js'],
    tasks: ['babel']
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['babel', 'watch']);



}