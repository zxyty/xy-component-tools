const less = require('less');
const { readFileSync } = require('fs');
const path = require('path');
const postcss = require('postcss');
const NpmImportPlugin = require('less-plugin-npm-import');
const through2 = require('through2');
const postcssConfig = require('./postcssConfig');

function transformLess(lessFile, config = {}) {
    const { cwd = process.cwd() } = config;
    const resolvedLessFile = path.resolve(cwd, lessFile);

    let data = readFileSync(resolvedLessFile, 'utf-8');
    data = data.replace(/^\uFEFF/, '');

    // Do less compile
    const lessOpts = {
        paths: [path.dirname(resolvedLessFile)],
        filename: resolvedLessFile,
        plugins: [new NpmImportPlugin({ prefix: '~' })],
        javascriptEnabled: true,
    };
    return less
        .render(data, lessOpts)
        .then(result => postcss(postcssConfig.plugins).process(result.css, { from: undefined }))
        .then(r => r.css);
}

function lessCliHandler() {
    return through2.obj(function (file, encoding, next) {
        if (
            file.path.match(/(\/|\\)style(\/|\\)index\.less$/)
        ) {
            transformLess(file.path)
                .then(css => {
                    file.contents = Buffer.from(css);
                    file.path = file.path.replace(/\.less$/, '.css');
                    this.push(file);
                    next();
                })
                .catch(e => {
                    console.error(e);
                });
        } else {
            next();
        }
    });
}

module.exports = lessCliHandler;


