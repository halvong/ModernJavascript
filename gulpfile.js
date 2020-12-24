const gulp = require('gulp');
const browserSync = require('browser-sync').create();
//https://medium.com/swlh/setting-up-gulp-4-0-2-for-bootstrap-sass-and-browsersync-7917f5f5d2c5

function style() {
    return gulp.src('*.css').pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: ".",
            index: "/index.html"
        }
    });
    gulp.watch('.css', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;