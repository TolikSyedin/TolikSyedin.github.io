var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
	sprite = require("gulp-svg-sprite");

var config = {
    shape                   : {
        dimensions          : {         // Set maximum dimensions 
            maxWidth    : 50,
            maxHeight   : 50
        },
        spacing         : {         // Add padding 
            padding     : 0,
        },
    },
    mode                :{
        view            : {         // Activate the «view» mode
            bust        : false,
        },
        symbol          : true      // Activate the «symbol» mode
    }
};

gulp.task('sprite', function(){
    gulp.src('src/svg/socials/*.svg')
    .pipe(sprite(config))
	.pipe(gulp.dest('src/svg/sprite/'));
});

gulp.task('sass', function(){
	gulp.src('src/styles/styles.scss')
	.pipe(sass())
	.pipe(rename('main.css'))
	.pipe(gulp.dest('src/css/'));
})

gulp.task('watch', function(){
	gulp.watch('src/styles/styles.scss', ['sass']);
})

gulp.task('prefix', function(){
    gulp.src('src/css/main.css')
    .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
    }))
    .pipe(gulp.dest('src/css/main'))
})

gulp.task('default', ['sass', 'watch']);