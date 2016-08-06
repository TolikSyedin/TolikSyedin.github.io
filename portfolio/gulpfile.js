var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename');
	sprite = require("gulp-svg-sprite");

var config = {
    shape                   : {
        dimensions          : {         // Set maximum dimensions 
            maxWidth    : 50,
            maxHeight   : 50
        },
        spacing         : {         // Add padding 
            padding     : 5,
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
    gulp.src('src/svg/top/*.svg')
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

gulp.task('default', ['sass', 'watch']);