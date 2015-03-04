var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var config = {
    styles :{
        src: 'src/public/styles/*.scss',
        build: 'build/styles/',
        output: 'min.css'
    },
    scripts: {
        src: 'src/public/scripts/*.js',
        build: 'build/scripts',
        output: 'min.js'
    }
};

gulp.task('styles', function () {
    return gulp
        .src(config.styles.src)
        .pipe(sass())
        .pipe(concat(config.styles.output))
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.styles.build));
});

gulp.task('scripts', function() {
    return gulp
        .src(config.scripts.src)
        .pipe(uglify())
        .pipe(concat(config.scripts.output))
        .pipe(gulp.dest(config.scripts.build));
});

gulp.task('watch', function () {
    gulp.watch(config.styles.src, ['styles']),
    gulp.watch(config.scripts.src, ['scripts']);
});

gulp.task('default', ['styles', 'scripts']);
