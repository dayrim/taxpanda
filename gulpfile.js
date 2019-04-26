var gulp = require('gulp'),
concat = require('gulp-concat'),
notify = require('gulp-notify')
rename = require('gulp-rename'),
concat = require('gulp-concat'),
sass = require('gulp-sass')

function style() {
    return gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
}

function watch(){
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch('scss/*.scss', style)
}

exports.watch = watch
