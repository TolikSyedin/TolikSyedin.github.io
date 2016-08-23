var gulp = require('gulp'),
	sprite = require('gulp-svg-sprite'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  concatCss = require('gulp-concat-css'),
  uglifycss = require('gulp-uglifycss'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  pump = require('pump');

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


gulp.task('sass', function(){
  return gulp.src('src/styles/styles.scss')
  .pipe(sass())
  .pipe(rename('main.css'))
  .pipe(gulp.dest('src/css/'));
})

gulp.task('watch', function(){
  return gulp.watch('src/styles/styles.scss', ['sass', 'concat:Css', 'uglify:Css']);
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


gulp.task('default', ['sass', 'concat:Css', 'concat:Js']);
gulp.task('uglify', ['uglify:Css', 'uglify:Js'])
