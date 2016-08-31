var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default', ['sass','watch']);

gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});