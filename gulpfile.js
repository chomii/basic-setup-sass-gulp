const gulp = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();

// SASS

function css() {
    return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browsersync.reload({
        stream: true
    }))
}

// BROWSERSYNC

function browserSync(callback) {
    browsersync.init({
        server: {
            baseDir: 'src'
        },
        port: 3000
    });
    callback();
}

function browserSyncReload(callback) {
    browsersync.reload();
    callback();
}

// WATCH FILES

function watchFiles() {
    gulp.watch('src/scss/**/*.scss', css);
    gulp.watch('src/*.html', browserSyncReload);
    gulp.watch('src/js/**/*.js', browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
