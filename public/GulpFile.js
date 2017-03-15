var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var strip = require('gulp-strip-comments');
var minify = require('gulp-minify-css');
var htmlreplace = require('gulp-html-replace');

gulp.task('js', function() {
    gulp.src(['js/*.js', '!js/jquery-3.1.1.min.js'])
        .pipe(concat('script.js'))
        .pipe(strip())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('css', function() {
    gulp.src('css/*.css')
        .pipe(concat('style.css'))
        .pipe(minify({ keepSpecialComments: 0 }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy', function() {
    gulp.src(['js/jquery-3.1.1.min.js'])
        .pipe(gulp.dest('dist/js/'))
    gulp.src(['index.html'])
        .pipe(gulp.dest('dist/'))
    gulp.src(['css/overlays/*'])
        .pipe(gulp.dest('dist/css/overlays/'))
    gulp.src('img/**/*')
        .pipe(gulp.dest('dist/img/'))
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
});


gulp.task('replaceIndexFiles', function() {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'css/style.css',
            'js': 'js/script.js'
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['js', 'css', 'copy', 'replaceIndexFiles'], function() {});
