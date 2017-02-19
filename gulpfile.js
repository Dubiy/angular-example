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
    gulp.start('scss', 'images', 'scripts', 'js', 'css');
});

gulp.task('clean', function () {
    del(['static/css/*', 'static/js/*', 'static/images/*']);
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
        .pipe(gulp.dest('static/css'))
        .pipe(browserSync.stream());
});


gulp.task('css', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    ])
        .pipe(gulp.dest('static/css/'))
});

gulp.task('images', function () {
    return gulp.src(['web-src/images/**'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('static/images/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src(['static/modules/main/app.js', 'static/modules/**/*.js', 'static/modules/**/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', browserifyHandler)
        .pipe(ngAnnotate())
        .on('error', browserifyHandler)
        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('static/js/'))
        .pipe(browserSync.stream());
});


gulp.task('js', function () {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('static/js/'));
});

gulp.task('watch', function () {
    gulp.watch('web-src/scss/*.scss', ['scss']);
    gulp.watch('web-src/images/**', ['images']);
    gulp.watch(['static/modules/**/*.js', 'static/modules/**/js/*.js'], ['scripts']);
    gulp.watch(['static/index.html', 'static/modules/**/**/*.html']).on('change', browserSync.reload);
});


function browserifyHandler(err) {
    util.log(util.colors.red('Error: ' + err.message));
    this.end();
}
