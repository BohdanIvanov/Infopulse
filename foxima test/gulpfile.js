var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('css', function(){
   gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(prefix('last 15 versions'))
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function(){
   gulp.watch('scss/*.scss', ['css']) 
});