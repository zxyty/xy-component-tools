const gulp = require('gulp');
const path = require("path");
const rimraf = require("rimraf");
const lessCliHandler = require('./transformLess');
const devServerHandler = require('./devServer');
const compileHandler = require('./compile');
const initTemplateHandler = require('./initTemplate');

gulp.task(
    'style',
    gulp.series(done => {
        gulp
            .src('./src/**/*.less')
            .pipe(lessCliHandler())
            .pipe(gulp.dest(path.join(process.cwd(), "dist")));

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
        rimraf.sync(path.join(process.cwd, 'lib'))
    }
)

gulp.task(
    'install',
    () => {
        gulp
        .src([
            "node_modules/xy-remote-components-template/**/*.*",
            "node_modules/xy-remote-components-template/.babelrc.js",
        ])
        .pipe(initTemplateHandler())
        .pipe(gulp.dest(path.join(process.cwd())));
    }
)
