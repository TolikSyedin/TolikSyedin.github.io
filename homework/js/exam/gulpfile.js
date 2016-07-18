'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('src/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('src/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/styles/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);