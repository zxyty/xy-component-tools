const gulp = require('gulp');
const path = require("path");
const rimraf = require("rimraf");
const lessCliHandler = require('./transformLess');
const devServerHandler = require('./devServer');
const compileHandler = require('./compile');

gulp.task(
    'style',
    gulp.series(done => {
        gulp
            .src('./src/**/*.less')
            .pipe(lessCliHandler())
            .pipe(gulp.dest(path.join(process.cwd(), "lib")));

        done();
    })
);

gulp.task(
    'start',
    gulp.series(devServerHandler)
)

gulp.task(
    'compile',
    gulp.series(compileHandler)
)

gulp.task(
    'clean',
    () => {
        rimraf.sync(path.join(process.cwd, 'lib/components'))
    }
)

gulp.task(
    'init',
    () => {
        // rimraf.sync(path.join(process.cwd, 'lib'))
    }
)
