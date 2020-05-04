const { spawn } = require("child_process");
const path = require("path");

const webpackDevServerPath = path.join(process.cwd(), 'node_modules/webpack-dev-server/bin/webpack-dev-server.js');

module.exports = function (done) {
    const cmd = spawn('node', [
        webpackDevServerPath,
        '--progress',
        '--config',
        path.join(process.cwd(), 'webpack/dev.config.js'),
    ], { stdio: 'inherit' })

    cmd.on('close', () => done());
}
