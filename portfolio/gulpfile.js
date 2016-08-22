var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
  concat = require('gulp-concat'),
	sprite = require("gulp-svg-sprite"),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  uglifycss = require('gulp-uglifycss'),
  gulps = require('gulp-series'),
  concatCss = require('gulp-concat-css');

var config = {
    mode                :{
        symbol          : true      // Activate the «symbol» mode
    }
};

gulp.task('sprite', function(){
    return gulp.src('src/svg/testgroup/*.svg')
    .pipe(sprite(config))
	.pipe(gulp.dest('src/svg/sprite/'));
});

gulps.registerTasks({
    'sass': function(){
    return gulp.src('src/styles/styles.scss')
    .pipe(sass())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('src/css/'));
  },
    'concat:Css': function () {
    return gulp.src(['src/css/normalize.css', 'src/css/owl.carousel.css', 'src/css/main.css'])
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('build/css/'));
  },
    'uglify:Css': function () {
    return gulp.src('build/css/main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('build/css/'));
    }
});

gulps.registerSeries("css", ['sass', 'concat:Css', 'uglify:Css']);


gulp.task('sass', function(){
	return gulp.src('src/styles/styles.scss')
	.pipe(sass())
	.pipe(rename('main.css'))
	.pipe(gulp.dest('src/css/'));
})

gulp.task('watch', function(){
	return gulp.watch('src/styles/styles.scss', ['css']);
})

gulp.task('concat:Js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('concat:Css', function () {
  return gulp.src(['src/css/normalize.css', 'src/css/owl.carousel.css', 'src/css/main.css'])
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('build/css/'));
});


gulp.task('uglify:Js', function (cb) {
  pump([
        gulp.src('build/js/*.js'),
        uglify(),
        gulp.dest('build/js')
    ],
    cb
  );
});

gulp.task('uglify:Css', function () {
  gulp.src('build/css/main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('build/css/'));
});


gulp.task('default', ['sass', 'concat:Css','concat:Js', 'uglify:Css', 'uglify:Js']);
