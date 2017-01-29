var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    ngAnnotate   = require('gulp-ng-annotate'),
    uglify       = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    scss         = require('gulp-sass'),
    minifyCss    = require('gulp-minify-css'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    sourcemaps   = require('gulp-sourcemaps'),
    babel        = require('gulp-babel'),
    browserSync  = require('browser-sync').create(),
    util         = require('gulp-util');

gulp.task('default', ['clean'], function() {
    gulp.start('scss', 'images', 'scripts');
});

gulp.task('clean', function () {
    del(['css/*', 'js', 'images']);
});

gulp.task('scss', function () {
    return gulp.src('web-src/scss/*.scss')
        .pipe(sourcemaps.init(''))
        .pipe(scss().on('error', scss.logError))
        .on('error', browserifyHandler)
        .pipe(autoprefixer())
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src(['web-src/images/**'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('images/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src(['modules/main/app.js', 'modules/**/*.js', 'modules/**/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', browserifyHandler)
        .pipe(ngAnnotate())
        .on('error', browserifyHandler)
        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        scriptPath: function (path, port, options) {
            return "/browser-sync/browser-sync-client.js";
        },
        socket: {
            domain: 'localhost:3000'
        },
        server: {
            baseDir: "./"
        },
        notify: false
    });

    gulp.watch('web-src/scss/*.scss', ['scss']);
    gulp.watch('web-src/images/**', ['images']);
    gulp.watch(['modules/**/*.js', 'modules/**/js/*.js'], ['scripts']);
    gulp.watch(['index.html', 'modules/**/**/*.html']).on('change', browserSync.reload);
});


function browserifyHandler(err) {
    util.log(util.colors.red('Error: ' + err.message));
    this.end();
}
