const through2 = require('through2');

function initTemplateHandler() {
    return through2.obj(function (file, encoding, next) {
        if (
            !file.path.match(/package\.json$/)||
            !file.path.match(/node_modules/)
        ) {
            this.push(file);
            next();
        } else {
            next();
        }
    });
}

module.exports = initTemplateHandler;
