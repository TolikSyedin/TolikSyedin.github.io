'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var svgSprite = require('gulp-svg-sprite');


 
// Basic configuration example 
var config = {
    shape               : {
        dimension       : {         // Set maximum dimensions 
            maxWidth    : 35,
            maxHeight   : 35
        },
    },
    mode                : {
        view            : {         // Activate the «view» mode 
            bust        : false,
            render      : {
                css     : true,
            }
        },
            symbol      : true,
    }
};

gulp.task('sprite', function(){
	gulp.src('**/*.svg', {cwd: 'src/img/svg'})
	    .pipe(svgSprite(config))
	    .pipe(gulp.dest('src/svg'));
});

gulp.task('sass', function () {
  return gulp.src('src/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/styles/styles.scss', ['sass']);
});



gulp.task('default', ['sass', 'sass:watch']);